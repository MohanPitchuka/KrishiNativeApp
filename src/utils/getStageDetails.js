import {isBlank} from './dateHelper/lodash-mini';

const getStageDetails = (
  plotList,
  data,
  allData = false,
  harvestedCrop = false,
) => {
  const stageIndex = data?.findIndex(obj => {
    if (plotList?.crop_stage === obj?.crop_stage_translation?.language_label) {
      return obj;
    }
  });
  if (stageIndex === -1) {
    return [];
  }
  let temp = [];
  if (allData) {
    if (!harvestedCrop) {
      temp = data.map((x, i) => {
        return {
          cropStageStatus:
            stageIndex > i
              ? 'completed'
              : stageIndex < i
              ? 'upcoming'
              : 'ongoing',
          ...x,
        };
      });
    } else {
      temp = data.map(x => {
        return {
          cropStageStatus: 'completed',
          ...x,
        };
      });
    }
  } else {
    if (!harvestedCrop) {
      temp = [
        ...(isBlank(data[stageIndex - 1])
          ? []
          : [{cropStageStatus: 'completed', ...data[stageIndex - 1]}]),
        {cropStageStatus: 'ongoing', ...data[stageIndex]},
        ...(isBlank(data[stageIndex + 1])
          ? []
          : [{cropStageStatus: 'upcoming', ...data[stageIndex + 1]}]),
      ];
    } else {
      temp = [
        ...(isBlank(data[stageIndex - 2])
          ? []
          : [{cropStageStatus: 'completed', ...data[stageIndex - 2]}]),
        ...(isBlank(data[stageIndex - 1])
          ? []
          : [{cropStageStatus: 'completed', ...data[stageIndex - 1]}]),
        {cropStageStatus: 'completed', ...data[stageIndex]},
      ];
    }
  }
  return temp;
};

export {getStageDetails};
