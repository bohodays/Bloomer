import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SInput, SDiv } from "./styles";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function CreateInputLine({
  icon,
  placeholder,
  contentInput,
  setContentInput,
}: any): JSX.Element {
  return (
    <SDiv>
      <FontAwesomeIcon
        className={contentInput ? "icon active" : "icon"}
        icon={icon}
      />
      <SInput
        value={contentInput}
        onChange={(e: any) => setContentInput(e.target.value)}
        // type="text"
        placeholder={placeholder}
      />
    </SDiv>
  );
}

export default CreateInputLine;
