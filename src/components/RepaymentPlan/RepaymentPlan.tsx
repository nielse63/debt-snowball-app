import { CloseOutlined, DollarOutlined } from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import { addMonths, format } from "date-fns";
import { useState } from "react";
import formatCurrency from "../../helpers/formatCurrency";
import isNumeric from "../../helpers/isNumeric";
import kebabCase from "../../helpers/kebabCase";
import uuid from "../../helpers/uuid";

import "./styles.css";

interface RepaymentPlanProps {
  data: ResultsObject[];
  accounts: AccountItem[];
}

function RepaymentPlan(props: RepaymentPlanProps) {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Total Balance",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Interest Accrued",
      dataIndex: "interest",
      key: "interest",
    },
    {
      title: "Total Payment",
      dataIndex: "payment",
      key: "payment",
    },
  ];
  props.accounts.forEach((account, i) => {
    columns.splice(i + 1, 0, {
      title: account.name,
      dataIndex: kebabCase(account.name),
      key: kebabCase(account.name),
    });
  });
  const date = new Date();
  const rows = props.data.map(({ balance, accounts }, i) => {
    const interest = accounts.reduce((acc, account) => {
      return acc + account.accruedInterest;
    }, 0);
    const payment = accounts.reduce((acc, account) => {
      return acc + account.paymentAmount;
    }, 0);
    const output: { [key: string]: any } = {
      date: format(addMonths(date, i), "MMM yyyy"),
    };
    accounts.forEach(({ name, paymentAmount }) => {
      output[kebabCase(name)] = paymentAmount > 0 ? paymentAmount : "";
    });
    return Object.entries({
      ...output,
      balance,
      interest,
      payment,
    }).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: isNumeric(value) ? formatCurrency(value) : value,
        key: uuid(),
      };
    }, {});
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        icon={<DollarOutlined />}
        className="card-action-button"
        key="repayment-plan"
        onClick={showModal}
      >
        See Repayment Plan
      </Button>
      <Modal
        title="Repayment Plan"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="80vw"
        className="repayment-plan-modal"
        centered
        footer={[
          <Button
            key="repayment-plan-close"
            onClick={handleCancel}
            icon={<CloseOutlined />}
            type="text"
          >
            Close
          </Button>,
        ]}
      >
        <Table
          columns={columns}
          dataSource={rows}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </Modal>
    </>
  );
}

export default RepaymentPlan;
