import { useDropdownContext } from "../Dropdown";
import * as Styled from "./DropdownOption.styles";

export const DropdownOption = ({ children: label, value }) => {
  const { size, setData, setIsOpen, onChange } = useDropdownContext();

  const handleOnClick = () => {
    setData({ label, value });

    onChange && onChange(value)

    setIsOpen.off();
  }

  return (
    <Styled.Container size={size} onClick={handleOnClick}>
      {label}
    </Styled.Container>
  );
};
