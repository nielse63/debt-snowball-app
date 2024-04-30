import { Card, InputNumber } from "antd";
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
  const { accounts, additionalPayment } = useContext(AccountsContext);

  const totalMinPayment = accounts.reduce(
    (acc: number, account: AccountItem) => {
      return acc + account.minPayment;
    },
    0
  );

  return (
    <div className="form-card">
      <Card title="Additional Payment">
        <div className="card-body text-sm">
          <ResultsItem
            title="Min. Payment Total"
            value={formatCurrency(totalMinPayment)}
            tooltip="The sum of all minimum payment amounts"
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
        </div>
      </Card>
    </div>
  );
}

export default FormCard;
