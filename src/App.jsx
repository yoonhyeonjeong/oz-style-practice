import "./App.scss";
import {contents} from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import Section from "./components/Section";
function App() {
    return (
        <main>
            <Header />
            <Section>
                {contents.map(el => (
                    <Content
                        key={el.id}
                        content={el}
                    />
                ))}
            </Section>
        </main>
    );
}

export default App;
