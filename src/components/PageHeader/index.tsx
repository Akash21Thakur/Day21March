import { inject, observer } from "mobx-react";
import ThemeStore from "../../stores/themeStore";
import { FireIcon, Header, IconContainer, PageTitle } from "./styleComponent";
interface Props{
  text: string
}

interface InjectedProps extends Props{
  themeStore: ThemeStore
}
const PageHeader = inject("themeStore")(observer((props: Props) => {
  console.log(props);
  const {themeStore} = props as InjectedProps;

  return (
    <>
    <Header isDark={themeStore.isDark}>
      
      <IconContainer>
        {/* <i ></i> */}
        <FireIcon className="fa-solid fa-fire"></FireIcon>
      </IconContainer>
      <PageTitle>{props.text}</PageTitle>
    </Header>
    </>
  );
}))


export default PageHeader;