import Header from "../header/header";
import Footer from "../footer/footer";
import { ReactElement } from "react";

export default function MobileTemplate(
  props: {
    children: React.ReactNode
  }
): ReactElement {
  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}