import { DeleteOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import { useContext } from "react";
import { actionTypes } from "../../helpers/constants";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
import type { DeleteButtonProps } from "./types";

function DeleteButton(props: DeleteButtonProps) {
  const { title, id } = props;
  const dispatch = useContext(AccountsContextDispatcher);

  const onClickHandler = () => {
    dispatch({
      type: actionTypes.DELETE_ACCOUNT,
      payload: { key: id },
    });
  };

  return (
    <Flex justify="center" align="center">
      <Tooltip title={title}>
        <Button
          icon={<DeleteOutlined />}
          aria-label={title}
          onClick={onClickHandler}
        />
      </Tooltip>
    </Flex>
  );
}

export default DeleteButton;
