import * as React from "react";

// ;
import {
  isCodeNode,
  isVisualNode,
  NodeInstance,
  keys,
  VisualNode,
  NodesDefCollection,
  getNodeDef,
  noop,
} from "@flyde/core";
import classNames from "classnames";
import { safelyGetNodeDef } from "../../flow-editor/getNodeDef";

export type SideBarProps = {
  node: VisualNode;
  selectedIds: string[];
  resolvedNodes: NodesDefCollection;
  onSelect: (id: NodeInstance, ev: React.MouseEvent) => void;
  onFocusInput: (id: string, ev: React.MouseEvent) => void;
  onFocusOutput: (id: string, ev: React.MouseEvent) => void;
  onDblClick: (ins: NodeInstance) => void;
};

export enum MenuItemType {
  CODE = "code",
  CONST = "const",
  VISUAL = "visual",
  INPUT = "input",
  OUTPUT = "output",
}

export type MenuItemProps = {
  label: string;
  type: MenuItemType;
  selected: boolean;
  onSelect: (ev: React.MouseEvent) => void;
  onDblClick: (ev: React.MouseEvent) => void;
};

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { selected, type, label, onSelect, onDblClick } = props;
  const f = type.slice(0, 1).toUpperCase();
  return (
    <div
      className={classNames("menu-item", { selected })}
      onClick={onSelect}
      onDoubleClick={onDblClick}
    >
      <span className="type">{f}</span> <span className="label">{label}</span>
    </div>
  );
};

export const SideBar: React.FC<SideBarProps> = React.memo(function SideBarInner(
  props
) {
  const {
    selectedIds,
    onSelect,
    onDblClick,
    onFocusInput,
    onFocusOutput,
    node,
  } = props;

  const { instances } = node;

  const inputs = keys(node.inputs);
  const outputs = keys(node.outputs);

  const [expanded, setExpanded] = React.useState(false);

  const inputItems: MenuItemProps[] = inputs.map((id) => {
    return {
      label: id,
      type: MenuItemType.INPUT,
      selected: false,
      onSelect: noop,
      onDblClick: (e) => onFocusInput(id, e),
      key: id,
    };
  });

  const outputItems: MenuItemProps[] = outputs.map((id) => {
    return {
      label: id,
      type: MenuItemType.OUTPUT,
      selected: false,
      onSelect: noop,
      onDblClick: (e) => onFocusOutput(id, e),
      key: id,
    };
  });

  const items: MenuItemProps[] = instances.map((ins) => {
    const node = safelyGetNodeDef(ins, props.resolvedNodes);
    const type = isVisualNode(node)
      ? MenuItemType.VISUAL
      : isCodeNode(node)
      ? MenuItemType.CODE
      : MenuItemType.CONST;
    const selected = selectedIds.includes(ins.id);

    return {
      label: ins.id,
      type,
      selected,
      key: ins.id,
      onSelect: (e) => (selected ? noop : onSelect(ins, e)),
      onDblClick: () => onDblClick(ins),
    };
  });

  const expandCollapse = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div className={classNames("side-bar", { expanded })}>
      <div className="heading" onClick={expandCollapse}>
        Inputs
      </div>
      <div className="items">
        {inputItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </div>
      <div className="heading" onClick={expandCollapse}>
        Nodes
      </div>
      <div className="items">
        {items.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </div>
      <div className="heading" onClick={expandCollapse}>
        Outputs
      </div>
      <div className="items">
        {outputItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
});
