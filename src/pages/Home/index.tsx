import { MainTemplate } from "../../templates/MainTemplate";
import { BottomPanel } from "../../components/BottomPanel";
import { TimerMenu } from "../../components/TimerMenu";

export function Home() {
    return (
        <MainTemplate>
            <TimerMenu />

            <BottomPanel />
        </MainTemplate>
    )
}