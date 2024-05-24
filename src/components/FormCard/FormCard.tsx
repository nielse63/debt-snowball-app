import { Card, InputNumber, Select } from "antd";
import { useContext } from "react";
import { actionTypes } from "../../helpers/constants";
import formatCurrency from "../../helpers/formatCurrency";
import {
  AccountsContext,
  AccountsContextDispatcher,
} from "../../state/AccountsContext";
import ResultsItem from "../ResultsItem";

import "./styles.css";

function FormCard() {
  const dispatch = useContext(AccountsContextDispatcher);
  const { additionalPayment } = useContext(AccountsContext);

  // const totalMinPayment = accounts.reduce(
  //   (acc: number, account: AccountItem) => {
  //     return acc + account.minPayment;
  //   },
  //   0
  // );

  const handleChange = (value: string) => {
    dispatch({
      type: actionTypes.SET_STRATEGY,
      payload: value,
    });
  };

  return (
    <div className="form-card">
      <Card title="Repayment">
        <div className="card-body text-sm">
          <ResultsItem
            title="Additional Payment"
            // value={formatCurrency(totalMinPayment)}
            tooltip="The amount you can pay in addition to the minimum payment"
            className="mb-4"
          />
          <InputNumber
            className="w-full"
            addonBefore="$"
            min={0}
            value={additionalPayment}
            required
            onBlur={(event) => {
              const value = parseFloat(event.target.value);
              if (!value) {
                dispatch({
                  type: actionTypes.SET_MIN_PAYMENT,
                  payload: 0,
                });
                return;
              }
              if (additionalPayment === value) return;
              dispatch({
                type: actionTypes.SET_MIN_PAYMENT,
                payload: value,
              });
            }}
          />
          <ResultsItem
            title="Repayment Strategy"
            tooltip="The approach to paying off debt"
            className="mb-4 mt-4"
          />
          <Select
            defaultValue="avalanche"
            onChange={handleChange}
            style={{ width: "100%" }}
            options={[
              { value: "avalanche", label: "Avalanche" },
              { value: "snowball", label: "Snowball" },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}

export default FormCard;
