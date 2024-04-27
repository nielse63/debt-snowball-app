import {
  Card,
  CardHeader,
  Divider,
  InfoLabel,
  Input,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { useContext } from "react";
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
  const { additionalPayment } = useContext(AccountsContext);

  return (
    <div className="form-card">
      <Card className={styles.card} appearance="filled-alternative">
        <CardHeader
          header={
            <div className="flex items-center justify-between w-full">
              <InfoLabel info="The additional amount you can apply toward each monthly payment.">
                <b>Additional Monthly Payment:</b>
              </InfoLabel>
            </div>
          }
        />

        <Divider />

        <div className="card-body text-sm">
          <Input
            contentBefore="$"
            placeholder="Optional"
            type="number"
            min="0"
            defaultValue={`${additionalPayment}`}
            onBlur={(event) => {
              if (`${additionalPayment}` === `${event.target.value}`) return;
              dispatch({
                type: "SET_MIN_PAYMENT",
                payload: event.target.value,
              });
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default FormCard;
