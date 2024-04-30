import { InfoCircleOutlined } from "@ant-design/icons";
import { Card, Flex, InputNumber, Tag, Tooltip } from "antd";
import { useContext } from "react";
import { actionTypes } from "../../helpers/constants";
import formatCurrency from "../../helpers/formatCurrency";
import {
  AccountsContext,
  AccountsContextDispatcher,
} from "../../state/AccountsContext";

import "./styles.css";

function FormCard() {
  const dispatch = useContext(AccountsContextDispatcher);
  const { accounts, additionalPayment } = useContext(AccountsContext);

  const totalMinPayment = accounts.reduce((acc, account) => {
    console.log({ acc, account });
    return acc + account.minPayment;
  }, 0);

  return (
    <div className="form-card">
      <Card title="Additional Payment">
        <div className="card-body text-sm">
          <Flex
            align="center"
            justify="space-between"
            className="results-item mb-2"
          >
            <div>
              <b>Min. Payment Total</b>&nbsp;
              <Tooltip title="The sum of all minimum payment amounts">
                <InfoCircleOutlined />
              </Tooltip>
            </div>
            <Tag color="green">{formatCurrency(totalMinPayment)}</Tag>
          </Flex>

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
