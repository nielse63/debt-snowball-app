import { Card, InputNumber } from "antd";
import { useContext } from "react";
import { actionTypes } from "../../helpers/constants";
import {
  AccountsContext,
  AccountsContextDispatcher,
} from "../../state/AccountsContext";

import "./styles.css";

function FormCard() {
  const dispatch = useContext(AccountsContextDispatcher);
  const { additionalPayment } = useContext(AccountsContext);

  return (
    <div className="form-card">
      <Card title="Additional Payment:">
        <div className="card-body text-sm">
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
