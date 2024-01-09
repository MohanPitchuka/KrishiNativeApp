export const CROP_DATA = {
  area_sown: 0,
  created_on: '2024-01-08T18:47:50.713',
  crop_name: 'Wheat',
  crop_name_static_identifier: 'CR_WHEAT',
  crop_stage: 'Jointing stage',
  crop_stage_static_identifier: 'CSS_WHEAT_MEDIU_DURAT_JOINT_STAGE',
  crop_type: 'primary',
  crop_variety: null,
  crop_variety_static_identifier: null,
  crop_variety_type: 'Medium Duration',
  crop_variety_type_static_identifier: 'CV_WHEAT_VARIETY_DU_MEDIU_DURAT',
  crop_variety_user_input: 'Breat Wheat',
  date_of_harvesting: null,
  date_of_seed_sowing: '2023-11-20',
  enter_next_season_date: false,
  harvest_end_date: '2024-05-08',
  harvest_start_date: '2024-03-15',
  irrigation_advisory_data: [Object],
  is_date_of_seed_sowing_confirmed: true,
  is_harvested: false,
  last_crop_stage: 'Harvesting Stage',
  last_crop_stage_start_date: '2024-03-15',
  last_crop_stage_static_identifier: 'CSS_WHEAT_MEDIU_DURAT_HARVE_STAGE',
  plot_crop_id: 'b8c1038b-2001-4fe6-a4ad-97362cc6262d',
  plot_variation: 'Medium Duration',
  season_user_input: 'Rabi',
  season_user_input_static_identifier: 'SS_RB_1',
  tentative_advisory_stopped_date: null,
  tentative_season_end_date: null,
};

export const CROP_STAGES = [
  {
    crop_stage_data: {
      crop_stage_assoc: 1,
      crop_variation_assoc: [3],
      start_date: -20,
      end_date: 0,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_SHORT_DURAT_PRES_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Land preparation',
      description: '<p>Preparing the land for sowing</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Pre_sowing_30d63b4583.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 2,
      crop_variation_assoc: [1],
      start_date: 0,
      end_date: 2,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_SOWIN_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Sowing Stage',
      description:
        '<p>Maintaining optimum plant populations in field is the key to achieve maximum yield.</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Sowing_Stage_fb2cb3e9d5.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 3,
      crop_variation_assoc: [1],
      start_date: 3,
      end_date: 9,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_GERMINATIO',
    },
    crop_stage_translation: {
      language_label: 'Germination',
      description:
        '<p>Under favourable conditions, seedling emergenec usually occurs within seven days.</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Germination_abb97c4895.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 4,
      crop_variation_assoc: [1],
      start_date: 10,
      end_date: 21,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_SEEDL_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Seedling stage',
      description:
        '<p>Until first leaf becomes functional, the seedling is dependent on energy and nutrients stored in the seed.</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Seedling_6ee1f493ee.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 5,
      crop_variation_assoc: [1],
      start_date: 22,
      end_date: 30,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_CROWN_ROOT_INITI_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Crown Root Initiation Stage',
      description:
        '<p>Crown root initiation(CRI) to promote tillering. This stage is the most critical stage for irrigation in wheat, because any shortage of moisture at this stage results in less tillering, formation of small eartheads and great reduction in yield.</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Tillering_Stage_00f0573de3.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 6,
      crop_variation_assoc: [1],
      start_date: 31,
      end_date: 50,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_TILLE_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Tillering Stage',
      description:
        '<p>Tillering normally starts when leaf 3 is fully expanded and leaf 4 is emerging on the main shoot.&nbsp;<br>Subsequently second tiller will appear at leaf 2 when leaf 5 is emerging on main stem."</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Tillering_Stage_da251c3ec7.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 7,
      crop_variation_assoc: [1],
      start_date: 51,
      end_date: 62,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_JOINT_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Jointing stage',
      description:
        '<p>This is the stage at which the plants begin elongating when the nodes start developing above the crown node.&nbsp;</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Jointing_Stage_83c6919d44.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 8,
      crop_variation_assoc: [1],
      start_date: 63,
      end_date: 73,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_BOOTI_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Booting Stage',
      description:
        '<p>The booting stage ends when the first awns emerge from the flag leaf sheath and the head starts to force the sheath open.</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Booting_Stage_ec5f30bb65.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 9,
      crop_variation_assoc: [1],
      start_date: 74,
      end_date: 84,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_HEADI_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Heading Stage',
      description:
        '<p>The heading stage extends from the time of emergence of the tip of the head from the flag leaf sheath to when the head has completely emerged but has not yet started to flower.</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Heading_Stage_e7bc8b020a.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 10,
      crop_variation_assoc: [1],
      start_date: 85,
      end_date: 90,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_FLOWE_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Flowering stage',
      description:
        '<p>Flowering stage begins when the awns emerge from the sheath. When the awns have emerged the flowering begins and pollination and fertilization occurs. It is important again during the flowering stage that all the plants in a field flower at the same time.</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Flowering_Stage_76111c6e3b.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 11,
      crop_variation_assoc: [1],
      start_date: 91,
      end_date: 118,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_MILK_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Milk Stage',
      description:
        '<p>A milk like fluid can be squeezed out of the kernels when crushed between fingers Water stress will still reduce yields</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Milk_Stage_96a549eb44.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 12,
      crop_variation_assoc: [1],
      start_date: 119,
      end_date: 129,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_DOUGH_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Dough Stage',
      description:
        '<p>Kernel formation is completed during the dough development stage.&nbsp;</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Dough_Stage_73ebccc9f6.png.png',
        },
      },
    ],
  },
  {
    crop_stage_data: {
      crop_stage_assoc: 13,
      crop_variation_assoc: [1],
      start_date: 130,
      end_date: 140,
      raw_fraction: '0.0000000',
      irrigation_depth_factor: '0.0000000',
      wetting_factor_aws: '0.0000000',
      crop_factor: '0.0000000',
      iw_cpe_ratio: '0.0000000',
      wetting_factor_et: '0.0000000',
      allowable_iw_depletion: '0.0000000',
      jams_id: 'CSS_WHEAT_LONG_DURAT_HARVE_STAGE',
    },
    crop_stage_translation: {
      language_label: 'Harvesting Stage',
      description:
        '<p>The seed loses moisture, and any dormancy it may have had, during ripening stage.</p>',
    },
    crop_stage_images_serializer: [
      {
        image_assoc: {
          images:
            'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Harvesting_Stage_210961ad29.png.png',
        },
      },
    ],
  },
];

// ---------------------------------------
// [
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 1,
//       crop_variation_assoc: [1],
//       start_date: -20,
//       end_date: 0,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_PRES_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Land preparation',
//       description: '<p>Preparing the land for sowing</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Pre_sowing_30d63b4583.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 1,
//       crop_variation_assoc: [2],
//       start_date: -20,
//       end_date: 0,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_PRES_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Land preparation',
//       description: '<p>Preparing the land for sowing</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Pre_sowing_30d63b4583.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 1,
//       crop_variation_assoc: [3],
//       start_date: -20,
//       end_date: 0,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_PRES_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Land preparation',
//       description: '<p>Preparing the land for sowing</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Pre_sowing_30d63b4583.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 2,
//       crop_variation_assoc: [1],
//       start_date: 0,
//       end_date: 2,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_SOWIN_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Sowing Stage',
//       description:
//         '<p>Maintaining optimum plant populations in field is the key to achieve maximum yield.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Sowing_Stage_fb2cb3e9d5.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 2,
//       crop_variation_assoc: [2],
//       start_date: 0,
//       end_date: 2,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_SOWIN_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Sowing Stage',
//       description:
//         '<p>Maintaining optimum plant populations in field is the key to achieve maximum yield.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Sowing_Stage_fb2cb3e9d5.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 2,
//       crop_variation_assoc: [3],
//       start_date: 0,
//       end_date: 2,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_SOWIN_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Sowing Stage',
//       description:
//         '<p>Maintaining optimum plant populations in field is the key to achieve maximum yield.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Sowing_Stage_fb2cb3e9d5.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 3,
//       crop_variation_assoc: [1],
//       start_date: 3,
//       end_date: 9,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_GERMINATIO',
//     },
//     crop_stage_translation: {
//       language_label: 'Germination',
//       description:
//         '<p>Under favourable conditions, seedling emergenec usually occurs within seven days.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Germination_abb97c4895.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 3,
//       crop_variation_assoc: [2],
//       start_date: 3,
//       end_date: 8,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_GERMINATIO',
//     },
//     crop_stage_translation: {
//       language_label: 'Germination',
//       description:
//         '<p>Under favourable conditions, seedling emergenec usually occurs within seven days.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Germination_abb97c4895.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 3,
//       crop_variation_assoc: [3],
//       start_date: 3,
//       end_date: 6,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_GERMINATIO',
//     },
//     crop_stage_translation: {
//       language_label: 'Germination',
//       description:
//         '<p>Under favourable conditions, seedling emergenec usually occurs within seven days.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Germination_abb97c4895.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 4,
//       crop_variation_assoc: [1],
//       start_date: 10,
//       end_date: 21,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_SEEDL_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Seedling stage',
//       description:
//         '<p>Until first leaf becomes functional, the seedling is dependent on energy and nutrients stored in the seed.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Seedling_6ee1f493ee.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 4,
//       crop_variation_assoc: [2],
//       start_date: 9,
//       end_date: 19,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_SEEDL_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Seedling stage',
//       description:
//         '<p>Until first leaf becomes functional, the seedling is dependent on energy and nutrients stored in the seed.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Seedling_6ee1f493ee.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 4,
//       crop_variation_assoc: [3],
//       start_date: 7,
//       end_date: 15,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_SEEDL_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Seedling stage',
//       description:
//         '<p>Until first leaf becomes functional, the seedling is dependent on energy and nutrients stored in the seed.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Seedling_6ee1f493ee.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 5,
//       crop_variation_assoc: [1],
//       start_date: 22,
//       end_date: 30,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_CROWN_ROOT_INITI_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Crown Root Initiation Stage',
//       description:
//         '<p>Crown root initiation(CRI) to promote tillering. This stage is the most critical stage for irrigation in wheat, because any shortage of moisture at this stage results in less tillering, formation of small eartheads and great reduction in yield.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Tillering_Stage_00f0573de3.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 5,
//       crop_variation_assoc: [2],
//       start_date: 20,
//       end_date: 28,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_CROWN_ROOT_INITI_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Crown Root Initiation Stage',
//       description:
//         '<p>Crown root initiation(CRI) to promote tillering. This stage is the most critical stage for irrigation in wheat, because any shortage of moisture at this stage results in less tillering, formation of small eartheads and great reduction in yield.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Tillering_Stage_00f0573de3.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 5,
//       crop_variation_assoc: [3],
//       start_date: 16,
//       end_date: 25,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_CROWN_ROOT_INITI_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Crown Root Initiation Stage',
//       description:
//         '<p>Crown root initiation(CRI) to promote tillering. This stage is the most critical stage for irrigation in wheat, because any shortage of moisture at this stage results in less tillering, formation of small eartheads and great reduction in yield.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Tillering_Stage_00f0573de3.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 6,
//       crop_variation_assoc: [1],
//       start_date: 31,
//       end_date: 50,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_TILLE_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Tillering Stage',
//       description:
//         '<p>Tillering normally starts when leaf 3 is fully expanded and leaf 4 is emerging on the main shoot.&nbsp;<br>Subsequently second tiller will appear at leaf 2 when leaf 5 is emerging on main stem."</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Tillering_Stage_da251c3ec7.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 6,
//       crop_variation_assoc: [2],
//       start_date: 29,
//       end_date: 45,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_TILLE_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Tillering Stage',
//       description:
//         '<p>Tillering normally starts when leaf 3 is fully expanded and leaf 4 is emerging on the main shoot.&nbsp;<br>Subsequently second tiller will appear at leaf 2 when leaf 5 is emerging on main stem."</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Tillering_Stage_da251c3ec7.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 6,
//       crop_variation_assoc: [3],
//       start_date: 26,
//       end_date: 36,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_TILLE_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Tillering Stage',
//       description:
//         '<p>Tillering normally starts when leaf 3 is fully expanded and leaf 4 is emerging on the main shoot.&nbsp;<br>Subsequently second tiller will appear at leaf 2 when leaf 5 is emerging on main stem."</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Tillering_Stage_da251c3ec7.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 7,
//       crop_variation_assoc: [1],
//       start_date: 51,
//       end_date: 62,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_JOINT_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Jointing stage',
//       description:
//         '<p>This is the stage at which the plants begin elongating when the nodes start developing above the crown node.&nbsp;</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Jointing_Stage_83c6919d44.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 7,
//       crop_variation_assoc: [2],
//       start_date: 46,
//       end_date: 55,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_JOINT_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Jointing stage',
//       description:
//         '<p>This is the stage at which the plants begin elongating when the nodes start developing above the crown node.&nbsp;</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Jointing_Stage_83c6919d44.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 7,
//       crop_variation_assoc: [3],
//       start_date: 37,
//       end_date: 44,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_JOINT_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Jointing stage',
//       description:
//         '<p>This is the stage at which the plants begin elongating when the nodes start developing above the crown node.&nbsp;</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Jointing_Stage_83c6919d44.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 8,
//       crop_variation_assoc: [1],
//       start_date: 63,
//       end_date: 73,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_BOOTI_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Booting Stage',
//       description:
//         '<p>The booting stage ends when the first awns emerge from the flag leaf sheath and the head starts to force the sheath open.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Booting_Stage_ec5f30bb65.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 8,
//       crop_variation_assoc: [2],
//       start_date: 56,
//       end_date: 65,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_BOOTI_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Booting Stage',
//       description:
//         '<p>The booting stage ends when the first awns emerge from the flag leaf sheath and the head starts to force the sheath open.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Booting_Stage_ec5f30bb65.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 8,
//       crop_variation_assoc: [3],
//       start_date: 45,
//       end_date: 52,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_BOOTI_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Booting Stage',
//       description:
//         '<p>The booting stage ends when the first awns emerge from the flag leaf sheath and the head starts to force the sheath open.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Booting_Stage_ec5f30bb65.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 9,
//       crop_variation_assoc: [1],
//       start_date: 74,
//       end_date: 84,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_HEADI_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Heading Stage',
//       description:
//         '<p>The heading stage extends from the time of emergence of the tip of the head from the flag leaf sheath to when the head has completely emerged but has not yet started to flower.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Heading_Stage_e7bc8b020a.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 9,
//       crop_variation_assoc: [2],
//       start_date: 66,
//       end_date: 75,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_HEADI_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Heading Stage',
//       description:
//         '<p>The heading stage extends from the time of emergence of the tip of the head from the flag leaf sheath to when the head has completely emerged but has not yet started to flower.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Heading_Stage_e7bc8b020a.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 9,
//       crop_variation_assoc: [3],
//       start_date: 53,
//       end_date: 60,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_HEADI_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Heading Stage',
//       description:
//         '<p>The heading stage extends from the time of emergence of the tip of the head from the flag leaf sheath to when the head has completely emerged but has not yet started to flower.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Heading_Stage_e7bc8b020a.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 10,
//       crop_variation_assoc: [1],
//       start_date: 85,
//       end_date: 90,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_FLOWE_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Flowering stage',
//       description:
//         '<p>Flowering stage begins when the awns emerge from the sheath. When the awns have emerged the flowering begins and pollination and fertilization occurs. It is important again during the flowering stage that all the plants in a field flower at the same time.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Flowering_Stage_76111c6e3b.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 10,
//       crop_variation_assoc: [2],
//       start_date: 76,
//       end_date: 80,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_FLOWE_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Flowering stage',
//       description:
//         '<p>Flowering stage begins when the awns emerge from the sheath. When the awns have emerged the flowering begins and pollination and fertilization occurs. It is important again during the flowering stage that all the plants in a field flower at the same time.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Flowering_Stage_76111c6e3b.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 10,
//       crop_variation_assoc: [3],
//       start_date: 61,
//       end_date: 64,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_FLOWE_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Flowering stage',
//       description:
//         '<p>Flowering stage begins when the awns emerge from the sheath. When the awns have emerged the flowering begins and pollination and fertilization occurs. It is important again during the flowering stage that all the plants in a field flower at the same time.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Flowering_Stage_76111c6e3b.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 11,
//       crop_variation_assoc: [1],
//       start_date: 91,
//       end_date: 118,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_MILK_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Milk Stage',
//       description:
//         '<p>A milk like fluid can be squeezed out of the kernels when crushed between fingers Water stress will still reduce yields</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Milk_Stage_96a549eb44.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 11,
//       crop_variation_assoc: [2],
//       start_date: 81,
//       end_date: 105,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_MILK_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Milk Stage',
//       description:
//         '<p>A milk like fluid can be squeezed out of the kernels when crushed between fingers Water stress will still reduce yields</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Milk_Stage_96a549eb44.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 11,
//       crop_variation_assoc: [3],
//       start_date: 65,
//       end_date: 84,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_MILK_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Milk Stage',
//       description:
//         '<p>A milk like fluid can be squeezed out of the kernels when crushed between fingers Water stress will still reduce yields</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Milk_Stage_96a549eb44.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 12,
//       crop_variation_assoc: [1],
//       start_date: 119,
//       end_date: 129,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_DOUGH_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Dough Stage',
//       description:
//         '<p>Kernel formation is completed during the dough development stage.&nbsp;</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Dough_Stage_73ebccc9f6.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 12,
//       crop_variation_assoc: [2],
//       start_date: 106,
//       end_date: 115,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_DOUGH_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Dough Stage',
//       description:
//         '<p>Kernel formation is completed during the dough development stage.&nbsp;</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Dough_Stage_73ebccc9f6.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 12,
//       crop_variation_assoc: [3],
//       start_date: 85,
//       end_date: 92,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_DOUGH_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Dough Stage',
//       description:
//         '<p>Kernel formation is completed during the dough development stage.&nbsp;</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Dough_Stage_73ebccc9f6.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 13,
//       crop_variation_assoc: [1],
//       start_date: 130,
//       end_date: 140,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_LONG_DURAT_HARVE_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Harvesting Stage',
//       description:
//         '<p>The seed loses moisture, and any dormancy it may have had, during ripening stage.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Harvesting_Stage_210961ad29.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 13,
//       crop_variation_assoc: [2],
//       start_date: 116,
//       end_date: 125,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_MEDIU_DURAT_HARVE_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Harvesting Stage',
//       description:
//         '<p>The seed loses moisture, and any dormancy it may have had, during ripening stage.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Harvesting_Stage_210961ad29.png.png',
//         },
//       },
//     ],
//   },
//   {
//     crop_stage_data: {
//       crop_stage_assoc: 13,
//       crop_variation_assoc: [3],
//       start_date: 93,
//       end_date: 100,
//       raw_fraction: '0.0000000',
//       irrigation_depth_factor: '0.0000000',
//       wetting_factor_aws: '0.0000000',
//       crop_factor: '0.0000000',
//       iw_cpe_ratio: '0.0000000',
//       wetting_factor_et: '0.0000000',
//       allowable_iw_depletion: '0.0000000',
//       jams_id: 'CSS_WHEAT_SHORT_DURAT_HARVE_STAGE',
//     },
//     crop_stage_translation: {
//       language_label: 'Harvesting Stage',
//       description:
//         '<p>The seed loses moisture, and any dormancy it may have had, during ripening stage.</p>',
//     },
//     crop_stage_images_serializer: [
//       {
//         image_assoc: {
//           images:
//             'https://cdn.jiokrishi.com/KMSOPEN/Crop/Wheat/Crop Stages/Wheat_Harvesting_Stage_210961ad29.png.png',
//         },
//       },
//     ],
//   },
// ];
