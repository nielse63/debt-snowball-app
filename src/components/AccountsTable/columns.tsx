import type { TableProps } from "antd";
import DeleteButton from "./DeleteButton";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

const columns: TableProps<AccountItem>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (value, record) => {
      return <TextInput defaultValue={value} record={record} column="name" />;
    },
  },
  {
    title: "Current Balance",
    dataIndex: "balance",
    key: "balance",
    render: (value, record) => {
      return (
        <NumberInput
          defaultValue={value}
          record={record}
          column="balance"
          options={{
            addonBefore: "$",
          }}
        />
      );
    },
  },
  {
    title: "Min. Monthly Payment",
    key: "minPayment",
    dataIndex: "minPayment",
    render: (value, record) => {
      return (
        <NumberInput
          defaultValue={value}
          record={record}
          column="minPayment"
          options={{
            addonBefore: "$",
          }}
        />
      );
    },
  },
  {
    title: "Interest Rate",
    dataIndex: "interest",
    key: "interest",
    render: (value, record) => {
      return (
        <NumberInput
          defaultValue={value}
          record={record}
          column="interest"
          options={{
            addonAfter: "%",
          }}
        />
      );
    },
  },
  {
    title: "Actions",
    key: "action",
    render: (record) => {
      const title = `Delete account ${record.name}`;
      return <DeleteButton title={title} id={record.key} />;
    },
  },
];

export default columns;
