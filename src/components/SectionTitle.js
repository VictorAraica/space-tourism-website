import {
  SectionTitleStyled,
  SectionTitleNumberStyled,
} from "./SectionTitleStyled";

export default function SectionTitle({ number, text }) {
  return (
    <SectionTitleStyled>
      <SectionTitleNumberStyled>{number}</SectionTitleNumberStyled> {text}
    </SectionTitleStyled>
  );
}
