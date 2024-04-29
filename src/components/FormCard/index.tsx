import {
  Card,
  CardHeader,
  Divider,
  Field,
  InfoLabel,
  Input,
  Tag,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { useContext, useState } from "react";
import {
  AccountsContext,
  AccountsContextDispatcher,
} from "../../state/AccountsContext";

import "./styles.css";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "100%",
  },
  tag: {
    "border-color": tokens.colorPaletteGreenBorder1,
    "background-color": tokens.colorPaletteGreenBackground1,
    color: tokens.colorPaletteGreenForeground1,
  },
});

function FormCard() {
  const styles = useStyles();
  const dispatch = useContext(AccountsContextDispatcher);
  const { additionalPayment, accounts } = useContext(AccountsContext);
  const [hasError, setHasError] = useState(false);
  const minPaymentSum = accounts.reduce((acc, account) => {
    return acc + account.minPayment.value;
  }, 0);
  const fieldValidationState = hasError ? "error" : "none";

  return (
    <div className="form-card">
      <Card className={styles.card} appearance="filled-alternative">
        <CardHeader
          header={
            <div className="flex items-center justify-between w-full">
              <InfoLabel info="An amount you can pay in addition to the minimum payments.">
                <b>Additional Payment:</b>
              </InfoLabel>
            </div>
          }
        />

        <Divider />

        <div className="card-body text-sm">
          <div className="flex align-center justify-between mb-2 leading-8">
            <p className="mb-0">Total Minimum Payment:</p>
            <Tag className={styles.tag} appearance="filled">
              {`$${minPaymentSum}`}
            </Tag>
          </div>
          <Field validationState={fieldValidationState}>
            <Input
              className="w-full"
              contentBefore="$"
              type="number"
              min="0"
              defaultValue={`${additionalPayment}`}
              onBlur={(event) => {
                const value = parseFloat(event.target.value);
                if (additionalPayment === value) return;
                if (hasError) setHasError(false);
                dispatch({
                  type: "SET_MIN_PAYMENT",
                  payload: value - minPaymentSum,
                });
              }}
            />
          </Field>
        </div>
      </Card>
    </div>
  );
}

export default FormCard;
