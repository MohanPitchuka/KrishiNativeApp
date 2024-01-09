import { useState, useEffect } from "react";

const getStageStatus = (plotData, stageData, givenStage) => {
    const [stageStatus, setStageStatus] = useState("");

    useEffect(() => {
        const currentStageIndex = Number(
            stageData?.findIndex((obj) => {
                if (
                    plotData?.crop[0]?.crop_stage ===
                    obj?.crop_stage_translation?.language_label
                ) {
                    return obj;
                }
            })
        );
        const givenStageIndex = Number(
            stageData?.findIndex((obj) => {
                if (givenStage === obj?.crop_stage_translation?.language_label) {
                    return obj;
                }
            })
        );
        if (givenStageIndex >= 0 && currentStageIndex >= 0) {
            if (givenStageIndex < currentStageIndex) {
                setStageStatus("COMPLETED");
            } else if (givenStageIndex > currentStageIndex) {
                setStageStatus("UPCOMING");
            } else if (givenStageIndex === currentStageIndex) {
                setStageStatus("ONGOING");
            } else {
                setStageStatus("");
            }

        }
    }, [plotData, stageData, givenStage]);

    return stageStatus;
};

export default getStageStatus;
