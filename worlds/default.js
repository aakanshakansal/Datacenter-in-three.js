// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
  Constants.AvatarNames = ["newwhite"];

  /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

  Constants.UserBehaviorDirectory = "behaviors/default";
  Constants.UserBehaviorModules = ["lights.js", "fun1.js"];
  const avatarModels = [
    "3kDNEN2jKhiPYcYAfItpXCcaahDmYM54K-kP6mKb_x8AAx8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5ELA89CRIHIhgqADoIKTMPWCwTCh0SHD4gPDIyWUQCBEUIGQQaHg4fRQYCCBkEHQ4ZGA5EEgMHOzsPIC46GCoaMxsfOjwhBCIuWxM8XzwZHjpfND8JIw4cBQ8oXi8lOkQPCh8KRD0aDSQSEjkvICQ5BQM6Xi1GHhk9OglGOAcDBw0CHAEYD1wkKR0PITNGDBg",
    "3qPM9OnJ8B8G-bx-DZtT_uk55iJ-4seqH4D_N7XJcmxMGQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReNhUnEwgdOAIwGiASMykVQjYJEAcIBiQ6JigoQ14YHl8SAx4ABBQFXxwYEgMeBxQDAhReCBkdISEVOjQgAjAAKQEFICY7Hjg0QQkmRSYDBCBFLiUTORQGHxUyRDU_IF4VEAUQXjwFBSNHOj4rAgIbNz8COSEnFTUFCD4gJD4gKTIkRQZEGi42CRQAKDk8MAY",
    "3pOqrArMCIRUilNQ5kh5jDQpDI9rMSWBMf3S8zPNUX4gGAQEAANKX18WGRwVA14FA14TAh8BBRUEXhkfXwVfNxQmEgkcOQMxGyETMigUQzcIEQYJByU7JykpQl8ZH14TAh8BBRUEXh0ZEwIfBhUCAxVfCRgcICAUOzUhAzEBKAAEISc6Hzk1QAgnRCcCBSFELyQSOBUHHhQzRTQ-IV8UEQQRXxEIHEcpEkc-IDIKSDRIFgo7RwdJNUM_Ej4-FyhGChwfPD1DM0QIMSAcNjE",
    "3YrnwoVTORoxhAZDdVvJXzOO62FQKMuP7C2JaVRcRhXMMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2Hj0POyA1ECoYMgg6GwE9ah4hOC8gLgwSDgAAa3YwNnc6KzYoLDwtdzQwOis2LzwrKjx2IDE1CQk9EhwIKhgoASktCA4TNhAcaSEObQ4rLAhtBg07ETwuNz0abB0XCHY9OC04dhg4FmA1Dho2KBNhGGh0YSg1ETcqDhoDNy07OGgJODMbHD4JHTNoMhFoPDI",
    "3B45okYnR2Z096wkAU7ACqQg7iGeh5lcva8FNB-RZ-sgKjY2MjF4bW0kKy4nMWw3MWwhMC0zNyc2bCstbTdtBSYUIDsuCzEDKRMhABomcQU6IzQ7NRcJFRsbcG0rLWwhMC0zNyc2bC8rITAtNCcwMSdtOyouEhImCQcTMQMzGjI2ExUILQsHcjoVdhUwNxN2HRYgCic1LCYBdwYME20mIzYjbRc1BHcpdQcrIDsWBDs6ehY2Eht2Fxd6cBAxKCUzNnMQHRgUCggKcAUgHQ8",
    "3qPM9OnJ8B8G-bx-DZtT_uk55iJ-4seqH4D_N7XJcmxMGQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReNhUnEwgdOAIwGiASMykVQjYJEAcIBiQ6JigoQ14YHl8SAx4ABBQFXxwYEgMeBxQDAhReCBkdISEVOjQgAjAAKQEFICY7Hjg0QQkmRSYDBCBFLiUTORQGHxUyRDU_IF4VEAUQXjwFBSNHOj4rAgIbNz8COSEnFTUFCD4gJD4gKTIkRQZEGi42CRQAKDk8MAY",
  ];

  Constants.AvatarNames = avatarModels.map((dataLocation, i) => ({
    type: "3d",
    name: `Visitor ${i + 1}`,
    modelType: "glb",
    avatarType: "wonderland",
    dataLocation,
    dataRotation: [0, Math.PI, 0],
    dataScale: [0.3, 0.3, 0.3],
  }));

  Constants.DefaultCards = [
    {
      card: {
        name: "world model",
        layers: ["walk"],
        type: "3d",
        singleSided: true,
        shadow: true,
        translation: [0, -1.7, 0],
        placeholder: true,
        placeholderSize: [400, 0.1, 400],
        placeholderColor: 0xe0e0e0,
        placeholderOffset: [0, 0, 0],
      },
    },
    {
      card: {
        name: "light",
        layers: ["light"],
        type: "lighting",
        behaviorModules: ["Light", "Model1"],
        dataLocation:
          "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
        fileName: "/abandoned_parking_4k.jpg",
        dataType: "jpg",
        toneMappingExposure: 1.2,
      },
    },

    // {
    //     card:{
    //         translation: [1.0069786437685337, -1.624074442353982, 5.549296894655132],
    //         scale: [12.700379265109326, 12.700379265109326, 12.700379265109326],
    //         rotation: [0, 0.7006387142732703, 0, 0.7135162170977606],
    //         layers: [ "pointer","walk"],
    //         name: "/server room 1 .glb",
    //         dataLocation: "./assets/3D Models/Server room/server room 1 .glb",
    //         dataScale: [0.10481540570016783, 0.10481540570016783, 0.10481540570016783],
    //         fileName: "/server room 1 .glb",
    //         modelType: "glb",
    //         shadow: true,
    //         singleSided: true,
    //         type: "3d",

    //     }
    // },

    {
      card: {
        name: "entrance",
        type: "object",
        //             translation: [-12.810659100331655, -0.3481200328396844, -3.1404770589915407],
        // rotation: [0, -0.7612124821695144, 0, 0.6485025497169049],
        translation: [
          -15.0650630304129, 0.22323383369362948, -3.5956569234723985,
        ],
        rotation: [0, 0.5662317358397773, 0, -0.8242460926979712],
        spawn: "default",
        // behaviorModules: ["Names"],
      },
    },
    // {
    //     card:{
    //         translation: [-11.736424638485058, -1.5128042746529997, 0.449130285945301],
    //         scale: [1.090215128940928, 1.090215128940928, 1.090215128940928],
    //         rotation: [0, 0.8960452674970879, 0, 0.44396269955489776],
    //          layers: ["walk", "pointer"],
    //         name: "/air+conditioner.glb",
    //         dataLocation: "./assets/3D Models/Server room/air+conditioner.glb",
    //         dataScale: [2.1804747734777794, 2.1804747734777794, 2.1804747734777794],
    //         fileName: "/air+conditioner.glb",
    //         modelType: "glb",
    //         shadow: true,
    //         singleSided: true,
    //         type: "3d",

    //     }
    // },
    // {
    //     card:{
    //         translation: [8.618326766026701, -1.5128042746529997, 0.449130285945301],
    //         scale: [1.090215128940928, 1.090215128940928, 1.090215128940928],
    //         rotation: [0, 0.8960452674970879, 0, 0.44396269955489776],
    //          layers: ["walk", "pointer"],
    //         name: "/air+conditioner.glb",
    //         dataLocation: "./assets/3D Models/Server room/air+conditioner.glb",
    //         dataScale: [2.1804747734777794, 2.1804747734777794, 2.1804747734777794],
    //         fileName: "/air+conditioner.glb",
    //         modelType: "glb",
    //         shadow: true,
    //         singleSided: true,
    //         type: "3d",

    //     }
    // },
    // {
    //     card:{
    //         translation: [28.661857405047407, -1.5128042746529997, 0.3055394413925444],
    //         scale: [1.090215128940928, 1.090215128940928, 1.090215128940928],
    //         rotation: [0, 0.8960452674970879, 0, 0.44396269955489776],
    //          layers: ["walk", "pointer"],
    //         name: "/air+conditioner.glb",
    //         dataLocation: "./assets/3D Models/Server room/air+conditioner.glb",
    //         dataScale: [2.1804747734777794, 2.1804747734777794, 2.1804747734777794],
    //         fileName: "/air+conditioner.glb",
    //         modelType: "glb",
    //         shadow: true,
    //         singleSided: true,
    //         type: "3d",

    //     }
    // },
    // {
    //     card:{
    //         translation: [-11.674753711929384, -1.5128042746529997, -22.81515729592127],
    //         scale: [1.090215128940928, 1.090215128940928, 1.090215128940928],
    //         rotation: [0, 0.43476156270008354, 0, -0.9005456032864642],
    //          layers: ["walk", "pointer"],
    //         name: "/air+conditioner.glb",
    //         dataLocation: "./assets/3D Models/Server room/air+conditioner.glb",
    //         dataScale: [2.1804747734777794, 2.1804747734777794, 2.1804747734777794],
    //         fileName: "/air+conditioner.glb",
    //         modelType: "glb",
    //         shadow: true,
    //         singleSided: true,
    //         type: "3d",

    //     }
    // },
    // {
    //     card:{
    //         translation: [28.8084143851347, -1.5077327322740428, -22.81515729592127],
    //         scale: [1.090215128940928, 1.090215128940928, 1.090215128940928],
    //         rotation: [0.002650124995754735, 0.4261306135042944, -0.005357996347775549, -0.9046419009459478],
    //          layers: ["walk", "pointer"],
    //         name: "/air+conditioner.glb",
    //         dataLocation: "./assets/3D Models/Server room/air+conditioner.glb",
    //         dataScale: [2.1804747734777794, 2.1804747734777794, 2.1804747734777794],
    //         fileName: "/air+conditioner.glb",
    //         modelType: "glb",
    //         shadow: true,
    //         singleSided: true,
    //         type: "3d",

    //     }
    // },
    // {
    //     card:{
    //         translation: [8.467399387185328, -1.5077327322740428, -22.81515729592127],
    //         scale: [1.090215128940928, 1.090215128940928, 1.090215128940928],
    //         rotation: [0.002778471240827126, 0.4042070050954099, -0.005292578286600656, -0.914648001006094],
    //          layers: ["walk", "pointer"],
    //         name: "/air+conditioner.glb",
    //         dataLocation: "./assets/3D Models/Server room/air+conditioner.glb",
    //         dataScale: [2.1804747734777794, 2.1804747734777794, 2.1804747734777794],
    //         fileName: "/air+conditioner.glb",
    //         modelType: "glb",
    //         shadow: true,
    //         singleSided: true,
    //         type: "3d",

    //     }
    // },
    // {
    //     card:{
    //         translation: [33.73256060481784, 0.5527593286042629, -10.712365218432861],
    //         scale: [1.5622654854938518, 1.5622654854938518, 1.5622654854938518],
    //         rotation: [0, -0.7079679752933482, 0, 0.706244536941021],
    //         layers: [ "pointer","walk"],
    //         name: "/storage.glb",
    //         dataLocation: "./assets/3D Models/Server room/storage.glb",
    //         dataScale: [0.018070236251718934, 0.018070236251718934, 0.018070236251718934],
    //         fileName: "/storage.glb",
    //         modelType: "glb",
    //         shadow: true,
    //         singleSided: true,
    //         type: "3d",

    //     }
    // },
    // {
    //     card:{
    //         translation: [0.00792140193626345, -1.59760259412407, 0.02981327822742852],
    //         scale: [14.299413736448143, 14.299413736448143, 14.299413736448143],
    //         rotation: [0, -0.0018533691730306112, 0, 0.9999982825098793],
    //         layers: [ "pointer","walk"],
    //         name: "/server room 1 .glb",
    //         dataLocation: "./assets/3D Models/Server room/server room 1 .glb",
    //         dataScale: [0.10481540570016783, 0.10481540570016783, 0.10481540570016783],
    //         fileName: "/server room 1 .glb",
    //         modelType: "glb",
    //         shadow: true,
    //         singleSided: true,
    //         type: "3d",

    //     }
    // }
    // // browser left
    // {
    //     card:{
    //         translation: [33.004102141986806, 0.28932656218119523, -12.381725760057748],
    //         scale: [1.2831265169277482, 1.2831265169277482, 1.2831265169277482],
    //         rotation: [0, -0.7108462586662816, 0, 0.7033474223597823],
    //         layers: ["walk", "pointer"],
    //         behaviorModules: ["Hyperbeam1"],
    //         name: "hyperbeam1",
    //         fullBright: true,
    //         textureHeight: 720,
    //         textureType: "canvas",
    //         textureWidth: 1280,
    //         type: "2d",

    //     }
    // },
    // // browser right
    // {
    //     card:{
    //         translation: [33.00213801147278, 0.2965492543196776, 2.015751619317106],
    //         scale: [1.2831265169277482, 1.2831265169277482, 1.2831265169277482],
    //         rotation: [0, -0.7108462586662816, 0, 0.7033474223597823],
    //         layers: ["walk", "pointer"],
    //         behaviorModules: ["Hyperbeam2"],
    //         name: "hyperbeam2",
    //         fullBright: true,
    //         textureHeight: 720,
    //         textureType: "canvas",
    //         textureWidth: 1280,
    //         type: "2d",

    //     }
    // },
    // {
    //     card: {
    //         translation: [-4.5783068913150515, 0.36213498857782556, 22.268696315286462],
    //         scale: [3.8715315238551566, 3.8715315238551566, 3.8715315238551566],
    //         rotation: [0, -0.018214002798796536, 0, 0.9998341112914908],
    //         layers: ["walk", "pointer"],
    //         behaviorModules: ["ReplaceWorld"],
    //         name: "/Brown Mobile Wallpaper .png",
    //         cornerRadius: 0.02,
    //         fileName: "/Brown Mobile Wallpaper .png",
    //         fullBright: true,
    //         modelType: "img",
    //         replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
    //         replaceWorldTargetURL: "?world=Powermanagement",
    //         shadow: true,
    //         singleSided: true,
    //         textureLocation: "3ghe_5I6ackuQeqK89JG5ppeBPrtQMukMJskY0Mtm2ooDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIHTITEDcoHSESKDRWLA4AKj0OUlReHyEjIF9XVUgOCEkEFQgWEgITSQoOBBUIEQIVFAJJCwgEBgsDAhEDAgEGEgsTSF4MAFRVEUo9CTMRSgUGUhAkNQ80XhU3KwYfDAQyCR4tJg9KJSFTUwEKCTJIAwYTBkgALQ4yLiwhFQIpNxAdICk1ISURIwMPCB0hBSs_SlFWEwAsHxQ-Kzg0MT4y",
    //         textureType: "image",
    //         type: "2d",

    //     }
    // },
    // {
    //     card: {
    //         translation: [-12.898508102983557, 0.36213498857782556, 22.268696315286462],
    //         scale: [3.8715315238551566, 3.8715315238551566, 3.8715315238551566],
    //         rotation: [0, -0.018214002798796536, 0, 0.9998341112914908],
    //         layers: ["walk", "pointer"],
    //         behaviorModules: ["ReplaceWorld"],
    //         name: "/Brown Mobile Wallpaper  (1).png",
    //         cornerRadius: 0.02,
    //         fileName: "/Brown Mobile Wallpaper  (1).png",
    //         fullBright: true,
    //         modelType: "img",
    //         replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
    //         replaceWorldTargetURL: "?world=default",
    //         shadow: true,
    //         singleSided: true,
    //         textureLocation: "3LS4oI7iAu-QuvwGQPHowSfLaacb3AZFedNSuPQYIWXQJDg4PD92Y2MqJSApP2I5P2IvPiM9OSk4YiUjYzljNhk4OxwDNgo5Ax99ByUrARYleX91NAoIC3R8fmMlI2IvPiM9OSk4YiElLz4jOik-PyliICMvLSAoKTooKSotOSA4YwYWGwMlIjt5KDkPOyQkIT4CExR1PAZ4eSkIYTUvGBx6BS8qJD90G34IKnhjKC04LWMBOh4pKiMkPRMkNBk7fjl6LQEpHSY4HwF5Ggp1PgcTOS4deQ55Jnw5CAc_",
    //         textureType: "image",
    //         type: "2d",

    //     }
    // },
  ];
}
