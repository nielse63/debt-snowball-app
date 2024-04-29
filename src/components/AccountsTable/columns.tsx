import { DeleteOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Button } from "antd";

// const columns = [
//   { columnKey: "name", label: "Name" },
//   { columnKey: "balance", label: "Current Balance" },
//   { columnKey: "interest", label: "Interest Rate" },
//   { columnKey: "minPayment", label: "Min. Monthly Payment" },
//   { columnKey: "action", label: "" },
// ];

// export default columns;

const columns: TableProps<AccountItem>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Current Balance",
    dataIndex: "balance",
    key: "balance",
  },
  {
    title: "Interest Rate",
    dataIndex: "interest",
    key: "interest",
  },
  {
    title: "Min. Monthly Payment",
    key: "minPayment",
    dataIndex: "minPayment",
    // render: (_, { tags }) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? "geekblue" : "green";
    //       if (tag === "loser") {
    //         color = "volcano";
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  {
    title: "",
    key: "action",
    render: (_, record) => {
      console.log({ _, record });
      return <Button icon={<DeleteOutlined />} />;
    },
  },
];

export default columns;
