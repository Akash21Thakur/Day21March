import { FireIcon, Header, IconContainer, PageTitle } from "./styleComponent";
interface Props{
  text: string
}
const PageHeader = (props: Props) => {
  // console.log(props);
  return (
    <>
    <Header>
      
      <IconContainer>
        {/* <i ></i> */}
        <FireIcon className="fa-solid fa-fire"></FireIcon>
      </IconContainer>
      <PageTitle>{props.text}</PageTitle>
    </Header>
    </>
  );
};


export default PageHeader;