import {
  // Caption1,
  Card,
  Field,
  Input,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";

import "./styles.css";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "100%",
    // maxWidth: "100%",
  },
  tag: {
    "border-color": tokens.colorPaletteGreenBorder1,
    "background-color": tokens.colorPaletteGreenBackground1,
    color: tokens.colorPaletteGreenForeground1,
  },
});

function FormCard() {
  const styles = useStyles();

  return (
    <div className="form-card">
      <Card className={styles.card} appearance="filled-alternative">
        <div className="card-body text-sm">
          <Field
            label="Additional Monthly Payment"
            // validationState="success"
            // validationMessage="This is a success message."
          >
            <Input
              contentBefore="$"
              placeholder="Optional"
              type="number"
              min="0"
            />
          </Field>
        </div>
      </Card>
    </div>
  );
}

export default FormCard;
