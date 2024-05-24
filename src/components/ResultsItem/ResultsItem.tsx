import { InfoCircleOutlined } from "@ant-design/icons";
import { Flex, Tag, Tooltip } from "antd";
import classname from "classname";

import "./ResultsItem.css";

export type ResultsItemProps = {
  title: string;
  tooltip: string;
  value?: string;
  style?: {
    [key: string]: string | number;
  };
  className?: string;
};

function ResultsItem(props: ResultsItemProps) {
  const { title, tooltip, value } = props;
  const cls = classname("results-item", props.className);

  return (
    <Flex align="center" justify="space-between" className={cls}>
      <div>
        <b>{title}</b>&nbsp;
        <Tooltip title={tooltip}>
          <InfoCircleOutlined />
        </Tooltip>
      </div>
      {value && <Tag color="green">{value}</Tag>}
    </Flex>
  );
}

export default ResultsItem;
