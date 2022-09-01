import { CustomPartRepo, FlydeFlow, keys, ResolvedFlydeFlowDefinition } from "@flyde/core";
import { File, FolderStructure } from "@flyde/dev-server";
import React, { useCallback, useEffect } from "react";

import { useParams, useHistory, useLocation } from "react-router-dom";
import { useQueryParam } from "use-query-params";
import { useDevServerApi } from "../api/apis-context";
import { Loader } from "@flyde/flow-editor"; // ../../common/lib/loader
import { IntegratedFlowManager } from "./IntegratedFlowManager";

export const FlowLoader: React.FC = (props) => {
  const [fileName, setFileName] = useQueryParam<string>("fileName");

  const [flow, setFlow] = React.useState<FlydeFlow>();
  const [resolvedDefinitions, setResolvedDefinitions] = React.useState<ResolvedFlydeFlowDefinition>();

  const history = useHistory();
  const { search } = useLocation();

  const devServerClient = useDevServerApi();

  const loadData = useCallback(async () => {
    const structure = await devServerClient.fileStructure();
      
      const findFlydeFile = (structure: FolderStructure, fileName: string): File | undefined => {
        const exists = structure.find(
          (f) => !f.isFolder && f.isFlyde && (fileName === f.relativePath || !fileName)
          ) as File;
          
        if (exists) {
          return exists;
        }
        return structure.reduce<File | undefined>((acc, curr) => {
          if (acc) {
            return acc;
          }
          if (curr.isFolder) {
            return findFlydeFile(curr.children, fileName);
          }
          return undefined;
        }, undefined);
      };

      const file = findFlydeFile(structure, fileName);
      
      if (!file) {
        throw new Error("No .flyde file found in project");
      }
      const resolvedDefinitions = await devServerClient.resolveDefinitions(file.relativePath);
      setResolvedDefinitions(resolvedDefinitions);

      
      console.log('setting file', file.relativePath);
      
      
      const flow = await devServerClient.readFile(file.relativePath);
      setFlow(flow);
      setFileName(file.relativePath);
  }, [devServerClient, fileName, setFileName]);

  React.useEffect(() => {
    
  }, [
    history,
    devServerClient,
    fileName,
    setFileName,
    search,
  ]);

  useEffect(() => {
    console.log('CHANGEDD', fileName);
    setFlow(undefined);
    setResolvedDefinitions(undefined);
    loadData();
    
  }, [fileName, loadData])

  // eslint-disable-next-line no-constant-condition
  if (flow && resolvedDefinitions) {

    console.log({flow});
    
    const partFromQuery = new URLSearchParams(search).get("editedPartId") || "";

    const firstPartId = keys(flow.parts)[0];
    const startingPart = flow.parts[partFromQuery] || flow.parts[firstPartId];

    if (!startingPart) {
      throw new Error("impossible state");
    }

    const params = new URLSearchParams(window.location.search);
    const locationPortIfNot3000 = location.port === "3000" ? null : location.port;
    const port = Number(params.get("port") || locationPortIfNot3000 || 8545);


    console.log('Rendering', fileName, flow.parts.Main);
    
    return (
      <IntegratedFlowManager
        key={fileName}
        flow={flow}
        resolvedDefinitions={resolvedDefinitions}
        initialPart={startingPart}
        integratedSource={fileName}
        port={port}
      />
    );
  } else {
    return <Loader />;
  }
};