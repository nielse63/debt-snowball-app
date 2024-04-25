import {
  Button,
  // Caption1,
  Card,
  CardFooter,
  CardHeader,
  // CardPreview,
  Divider,
  InfoLabel,
  Link,
  Tag,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";
import { ArrowReplyRegular } from "@fluentui/react-icons";

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

function ResultsCard() {
  const styles = useStyles();

  return (
    <div className="accounts-card">
      <Card className={styles.card} appearance="filled-alternative">
        <CardHeader
          header={
            <div className="flex items-center justify-between w-full">
              <b>Results:</b>
            </div>
          }
        />

        <Divider />

        <div className="card-body text-sm">
          <div className="flex items-center justify-between w-full my-3.5">
            <b>Debt Free Date:</b>
            <Tag appearance="outline" className={styles.tag}>
              N/A
            </Tag>
          </div>

          <div className="flex items-center justify-between w-full my-3.5">
            <b>Total Amount Paid:</b>
            <Tag appearance="outline" className={styles.tag}>
              N/A
            </Tag>
          </div>

          <div className="flex items-center justify-between w-full my-3.5">
            <b>Interest Paid:</b>
            <Tag appearance="outline" className={styles.tag}>
              N/A
            </Tag>
          </div>

          <div className="flex items-center justify-between w-full my-3.5">
            <InfoLabel
              info={
                <>
                  This is example information for an InfoLabel.{" "}
                  <Link href="https://react.fluentui.dev">Learn more</Link>
                </>
              }
            >
              <b>Interest Saved:</b>
            </InfoLabel>

            <Tag appearance="outline" className={styles.tag}>
              N/A
            </Tag>
          </div>
        </div>
        <Divider />

        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <Button icon={<ArrowReplyRegular />} className="w-full">
              See Payment Plan
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ResultsCard;
