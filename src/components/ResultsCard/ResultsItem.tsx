import { InfoCircleOutlined } from "@ant-design/icons";
import { Flex, Tag, Tooltip } from "antd";

import "./styles.css";

export type ResultsItemProps = {
  title: string;
  tooltip: string;
  value: string;
};

function ResultsItem(props: ResultsItemProps) {
  const { title, tooltip, value } = props;

  return (
    <Flex align="center" justify="space-between" className="results-item">
      <div>
        <b>{title}</b>&nbsp;
        <Tooltip title={tooltip}>
          <InfoCircleOutlined />
        </Tooltip>
      </div>
      <Tag color="green">{value}</Tag>
    </Flex>
  );
}

export default ResultsItem;
