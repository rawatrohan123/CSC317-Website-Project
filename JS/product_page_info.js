
/**************************************************************
* Class:  CSC-317
* Group:	  Response Code 200
* Project: Group Project
*
* File: product_page_info.js
*
* Description: Our "backend" -- stores game info used in individual product
* pages, in the cart, the WishList (WIP) and the homepage.
*
**************************************************************/

//IE = Interactive Element
const IEDimensions = {

    productp_big: {
        width:876,
        height: 502
    },

    productp_small: {
        width:248.883,
        height: 140
    },

    productp_game: {
        width:392,
        height: 183.217
    }
    
};

//used like enums
const IEDimensionTypes = {
    PRODUCTP_BIG: "Interactive Element product page big",
    PRODUCTP_SMALL: "Interactive Element product page small",
    PRODUCTP_GAME: "Interactive Element product page game",
};

//used like enums
const IEType = {
    IMAGE: "Interactive Element image",
    VIDEO: "Interactive Element video"
};


const images_small_path = "../../images/product/product_pages";


/**
 * Our "Backend," stores Game information.
*/
var games_info = {
    general: {
        tag_map:{
            tag_Racing: {
                value: "Racing",
                url: "",
                games: [
                    [
                        'EuroTruck2'
                    ],
                    [
                        'DiRTRally2p0'
                    ]
                ]
            },
            tag_Simulation:  {
                value: "Simulation",
                url: "",
                games: [
                    [
                        'EuroTruck2'
                    ],
                    [
                        'DiRTRally2p0'
                    ],
                    [
                        'FTL'
                    ],
                    [
                        'EuroTruck2'
                    ],
                    [
                        'Freespace2'
                    ]
                ]
            },
            tag_Automobile_Sim:  {
                value: "Automobile Sim",
                url: ""
            },
            tag_Sports:  {
                value: "Sports",
                url: ""
            },
            tag_VR:  {
                value: "VR",
                url: ""
            },
            tag_First_Person:  {
                value: "First Person",
                url: ""
            },
            tag_Open_World:  {
                value: "Open World",
                url: ""
            },
            tag_Difficult:  {
                value: "Difficult",
                url: ""
            },
            tag_Co_op:  {
                value: "Co-op",
                url: ""
            },
            tag_3D_Vision:  {
                value: "3D-Vision",
                url: ""
            },
            tag_Family_Friendly:  {
                value: "Family Friendly",
                url: ""
            },
            tag_TrackIR:  {
                value: "TrackIR",
                url: ""
            },
            tag_Controller:  {
                value: "Controller",
                url: ""
            },
            tag_Adventure:  {
                value: "Adventure",
                url: ""
            },
            tag_Action:  {
                value: "Action",
                url: ""
            },
            tag_Programming:  {
                value: "Programming",
                url: ""
            },
            tag_Puzzle:  {
                value: "Puzzle",
                url: ""
            },
            tag_Indie:  {
                value: "Indie",
                url: ""
            },
            tag_Hacking:  {
                value: "Hacking",
                url: ""
            },
            tag_Singleplayer:  {
                value: "Singleplayer",
                url: ""
            },
            tag_Logic:  {
                value: "Logic",
                url: ""
            },
            tag_Education:  {
                value: "Education",
                url: ""
            },
            tag_Automation:  {
                value: "Automation",
                url: ""
            },
            tag_Space: {
                value: "Space",
                url: ""
            },
            tag_SciFi: {
                value: "Sci-Fi",
                url: ""
            },
            tag_Classic: {
                value: "Classic",
                url: ""
            },
            tag_SpaceSim: {
                value: "Space Sim",
                url: ""
            },
            tag_Moddable: {
                value: "Moddable",
                url: ""
            },
            tag_Multiplayer: {
                value: "Multiplayer",
                url: ""
            },
            tag_Massively_Multiplayer: {
                value: "Massively Multiplayer",
                url: ""
            },
            tag_Flight: {
                value: "Flight",
                url: ""
            },
            tag_Epic: {
                value: "Epic",
                url: ""
            },

            tag_Realistic: {
                value: "Realistic",
                url: ""
            },
            tag_Relaxing: {
                value: "Relaxing",
                url: ""
            },
            tag_Exploration: {
                value: "Exploration",
                url: ""
            },
            tag_Economy: {
                value: "Economy",
                url: ""
            },
            tag_Atmospheric: {
                value: "Atmospheric",
                url: ""
            },
            tag_Management: {
                value: "Management",
                url: ""
            },
            tag_Casual: {
                value: "Casual",
                url: ""
            },
            tag_RPG: {
                value: "RPG",
                url: ""
            },
            tag_Driving: {
                value: "Driving",
                url: ""
            },
            tag_Sandbox: {
                value: "Sandbox",
                url: ""
            },



            tag_Roguelike: {
                value: "Roguelike",
                url: ""
            },
            tag_Strategy: {
                value: "Strategy",
                url: ""
            },

            tag_Perma_Death: {
                value: "Perma Death",
                url: ""
            },

            tag_Replay_Value: {
                value: "Replay Value",
                url: ""
            },

            tag_Real_time_with_Pause: {
                value: "Real time with Pause Value",
                url: ""
            },
            tag_Great_SoundTrack: {
                value: "Great SoundTrack",
                url: ""
            },
            tag_2D: {
                value: "2D",
                url: ""
            },
            tag_Pixel_Graphics: {
                value: "Pixel Graphics",
                url: ""
            },
            tag_Pixel_Graphics: {
                value: "Pixel Graphics",
                url: ""
            },
            tag_Survival: {
                value: "Survival",
                url: ""
            },

            tag_Social_Deduction: {
                value: "Social Deduction",
                url: ""
            },
            tag_PvP: {
                value: "PvP",
                url: ""
            },
            tag_Top_Down: {
                value: "Top Down",
                url: ""
            },
            tag_Party_Game: {
                value: "Party Game",
                url: ""
            },
            tag_Colorful: {
                value: "Colorful",
                url: ""
            },
            tag_Cartoony: {
                value: "Cartoony",
                url: ""
            },
            tag_Local_Multiplayer: {
                value: "Local Multiplayer",
                url: ""
            },

   
       
            

    

         
            

            
        }
    },

    current_games: [
        "DiRTRally2p0",
        "TIS100",
        "Freespace2",
        "EuroTruck2",
        "FTL",
        "AmongUs",
        "BDO",
        "Descent3",
        "DGBZ",
        "GTA5",
        "TabletopSim",
        "AttackonTitan2"
    ],

    DiRTRally2p0: {
        title: 
        "DiRT Rally 2.0",

        price: 
        "$22.99",

        on_sale: false,

        sale_percentage: 0.5,

        description:
        `DiRT Rally 2.0 dares you to carve your way through a
        selection of iconic rally locations from across the globe,
        in the most powerful off-road vehicles ever made,
        knowing that the smallest mistake could end your stage.`,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(1,046)`
                ],
                [
                    `Very Positive`,
                    `(12,881)`
                ],
                [
                    `Feb 25, 2019`
                ],
                [
                    `Codemasters`
                ],
                [
                    `Codemasters`
                ]
            ]
        },

        tags: [
            [
                `tag_Racing`,
                9943,
                
            ],
            [
                `tag_Simulation`,
                8762
            ],
            [
                `tag_Automobile_Sim`,
                6666
            ],
            [
                `tag_Sports`,
                4096
            ],
            [
                `tag_VR`,
                2048
            ],
            [
                `tag_Difficult`,
                1337
            ],
            [
                `tag_First_Person`,
                512
            ],
            [
                `tag_Open_World`,
                420
            ],
            [
                `tag_Difficult`,
                128
            ],
            [
                `tag_Co_op`,
                69
            ],
            [
                `tag_Difficult`,
                42
            ],
            [
                `tag_Difficult`,
                32
            ],
            [
                `tag_3D_Vision`,
                23
            ],
            [
                `tag_Family_Friendly`,
                16
            ],
            [
                `tag_TrackIR`,
                8
            ],
            [
                `tag_Controller`,
                4
            ],
            [
                `tag_Adventure`,
                2
            ],
            [
                `tag_Action`,
                1
            ]
            
        ],

        video_urls: [
            "https://www.youtube.com/embed/RQ7JvIncd4Y", 
            "https://www.youtube.com/embed/BusYVQVaQoo"
        ],

        elements: [ ],

        end_images: 
        8 
    },

    TIS100: {
        title: 
        "TIS-100",

        price: 
        "$6.99",

        on_sale: true,

        sale_percentage: 0.75,

        description:
        `TIS-100 is an open-ended programming game by 
        Zachtronics, the creators of SpaceChem and Infinifactory, 
        in which you rewrite corrupted code segments to repair the TIS-100 
        and unlock its secrets. It’s the assembly language programming game 
        you never asked for! .`,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(13)`
                ],
                [
                    `Very Positive`,
                    `(2,589)`
                ],
                [
                    `Jul 20, 2015`
                ],
                [
                    `Zachtronics`
                ],
                [
                    `Zachtronics`
                ]
            ]
        },

        tags: [
            [
                `tag_Programming`,
                9943
            ],
            [
                `tag_Puzzle`,
                8762
            ],
            [
                `tag_Indie`,
                6666
            ],
            [
                `tag_Hacking`,
                4096
            ],
            [
                `tag_Singleplayer`,
                420
            ],
            [
                `tag_Logic`,
                128
            ],
            [
                `tag_Education`,
                69
            ],
            [
                `tag_Automation`,
                42
            ],
            [
                `tag_Difficult`,
                32
            ]
            
        ],

        video_urls: [
            "https://www.youtube.com/embed/HSg1qT2aNnw"
        ],

        elements: [ ],

        end_images: 
        4
    },

    Freespace2: {
        title: 
        "Freespace 2",

        price: 
        "$9.99",

        on_sale: true,

        sale_percentage: 0.75,

        description:
        `FreeSpace 2, the follow up to the classic Descent: FreeSpace
         – The Great War is ready to engage you in the second round. 
         Follow the Grand Terran Vasudan Alliance further into the 
         mysteries of the Shivans. Get your flight stick and hit the 
         flight deck. The last time was just a warm up. .`,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Mostly Positive`,
                    `(512)`
                ],
                [
                    `Very Positive`,
                    `(4,096)`
                ],
                [
                    `Sep 30, 1999`
                ],
                [
                    `Volition Inc`
                ],
                [
                    `Interplay Corp`
                ]
            ]
        },


        tags: [
            [
                `tag_Space`,
                3796
            ],
            [
                `tag_SciFi`,
                2766 
            ],
            [
                `tag_Action`,
                2017
            ],
            [
                `tag_Classic`,
                2006
            ],
            
            [
                `tag_SpaceSim`,
                1999
            ],
            [
                `tag_Simulation`,
                1024
            ],
            [
                `tag_Moddable`,
                1748
            ],
            [
                `tag_Singleplayer`,
                42
            ],
            [
                `tag_Multiplayer`,
                8
            ],
            [
                `tag_Flight`,
                4
            ],
            [
                `tag_Epic`,
                2
            ],
            
        ],

        video_urls: [
            "https://www.youtube.com/embed/khIWdolT9xY",
            "https://www.youtube.com/embed/uQpvJl0wPMc"
        ],

        elements: [ ],

        end_images: 
        7
    },

    EuroTruck2: {
        title: 
        "Euro Truck Simulator 2",

        price: 
        "$17.99",

        on_sale: false,

        sale_percentage: 0.75,

        description:
        `Travel across Europe as king of the road, a trucker 
        who delivers important cargo across impressive distances!
         With dozens of cities to explore, your endurance, skill
          and speed will all be pushed to their limits.`,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Overwhelmingly Positive`,
                    `(9,249)`
                ],
                [
                    `Overwhelmingly Positive`,
                    `(309,239)`
                ],
                [
                    `Oct 18, 2012`
                ],
                [
                    `SCS Software`
                ],
                [
                    `SCS Software`
                ]
            ]
        },


        tags: [
            [
                `tag_Simulation`,
                3796
            ],
            [
                `tag_Driving`,
                2766 
            ],
            [
                `tag_Automobile_Sim`,
                6666
            ],
            [
                `tag_Open_World`,
                420
            ],
            [
                `tag_Realistic`,
                420
            ],
            [
                `tag_Relaxing`,
                420
            ],
            [
                `tag_Singleplayer`,
                420
            ],
            [
                `tag_Moddable`,
                1748
            ],
            [
                `tag_Exploration`,
                1748
            ],
            [
                `tag_First_Person`,
                512
            ],
            [
                `tag_Economy`, 
                1748
            ],
            [
                `tag_Atmospheric`,
                1748
            ],
            [
                `tag_Adventure`,
                2
            ],
            [
                `tag_Indie`,
                6666
            ],
            [
                `tag_Management`,
                1748
            ],
            [
                `tag_Casual`,
                1748
            ],
            [
                `tag_TrackIR`,
                8
            ],
            [
                `tag_Sandbox`,
                8
            ],
            [
                `tag_Racing`,
                9943
            ],
            [
                `tag_RPG`,
                1748
            ],

        ],

        video_urls: [
            "https://www.youtube.com/embed/xlTuC18xVII",
            "https://www.youtube.com/embed/eqvI_kqqEhs"
        ],

        elements: [ ],

        end_images: 
        5
    },

    FTL: {
        title: 
        "FTL: Faster Than Light",

        price: 
        "$9.99",

        on_sale: false,

        sale_percentage: 0.75,

        description:
        `This "spaceship simulation roguelike-like" allows 
        you to take your ship and crew on an adventure 
        through a randomly generated galaxy filled with 
        glory and bitter defeat.`,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(353)`
                ],
                [
                    `Overwhelmingly Positive`,
                    `(45,595)`
                ],
                [
                    `Sep 14, 2012`
                ],
                [
                    `Subset Games`
                ],
                [
                    `Subset Games`
                ]
            ]
        },


        tags: [
            [
                `tag_Roguelike`,
                3796
            ],
            [
                `tag_Space`,
                3796
            ],
            [
                `tag_Strategy`,
                3796
            ],
            [
                `tag_SciFi`,
                2766 
            ],
            [
                `tag_Indie`,
                6666
            ],
            [
                `tag_Singleplayer`,
                420
            ],
            [
                `tag_Perma_Death`,
                3796
            ],
            [
                `tag_Difficult`,
                1337
            ],
            [
                `tag_Replay_Value`,
                3796
            ],
            [
                `tag_Real_time_with_Pause`,
                3796
            ],
            [
                `tag_Great_SoundTrack`, 
                3796
            ],
            [
                `tag_2D`,
                3796
            ],
            [
                `tag_Simulation`,
                8762
            ],
            [
                `tag_Survival`,
                8762
            ],
            [
                `tag_Adventure`,
                2
            ],
            [
                `tag_Pixel_Graphics`,
                3796
            ],
            [
                `tag_RPG`,
                1748
            ],
            [
                `tag_Atmospheric`,
                1748
            ]
        ],

        video_urls: [
            "https://www.youtube.com/embed/lQ4FRcu_bjs",
            "https://www.youtube.com/embed/eqvI_kqqEhs"
        ],

        elements: [ ],

        end_images: 
        5
    },

    AmongUs: {
        title: 
        "Among Us",

        price: 
        "$4.99",

        on_sale: false,

        sale_percentage: 0.75,

        description:
        `An online and local party game of teamwork and betrayal 
        for 4-10 players...in space! `,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(22,937)`
                ],
                [
                    `Very Positive`,
                    `(471,423)`
                ],
                [
                    `Nov 16, 2018`
                ],
                [
                    `Innersloth`
                ],
                [
                    `Innersloth`
                ]
            ]
        },


        tags: [
            [
                `tag_Multiplayer`,
                3796
            ],
            [
                `tag_Space`,
                3796
            ],
            [
                `tag_Social_Deduction`,
                3796
            ],
            [
                `tag_Survival`,
                1337
            ],
            [
                `tag_2D`,
                3796
            ],

            [
                `tag_Co_op`,
                3796
            ],
            [
                `tag_Local_Multiplayer`,
                3796
            ],
            [
                `tag_Cartoony`,
                3796
            ],
            [
                `tag_Action`,
                3796
            ],
            [
                `tag_Casual`,
                3796
            ],
            
            [
                `tag_SciFi`,
                2766 
            ],
            [
                `tag_Colorful`, 
                2766 
            ],
            
            
            [
                `tag_Party_Game`,
                3796
            ],
            [
                `tag_Top_Down`, 
                3796
            ],
            [
                `tag_PvP`,
                3796
            ]
            
        ],

        video_urls: [
            "https://www.youtube.com/embed/NSJ4cESNQfE",
            "https://www.youtube.com/embed/eqvI_kqqEhs"
        ],

        elements: [ ],

        end_images: 
        5
    },

    //--below this
    BDO: {
        title: 
        "Black Desert Online",

        price: 
        "$4.99",

        on_sale: false,

        sale_percentage: 0.75,

        description:
        `An online and local party game of teamwork and betrayal 
        for 4-10 players...in space! `,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(22,937)`
                ],
                [
                    `Very Positive`,
                    `(471,423)`
                ],
                [
                    `Nov 16, 2018`
                ],
                [
                    `Innersloth`
                ],
                [
                    `Innersloth`
                ]
            ]
        },


        tags: [
            [
                `tag_Atmospheric`,
                1748
            ]
        ],

        video_urls: [
            "https://www.youtube.com/embed/DD4zMOvRrzM",
            "https://www.youtube.com/embed/eqvI_kqqEhs"
        ],

        elements: [ ],

        end_images: 
        5
    },

    Descent3: {
        title: 
        "Descent 3",

        price: 
        "$4.99",

        on_sale: false,

        sale_percentage: 0.75,

        description:
        `An online and local party game of teamwork and betrayal 
        for 4-10 players...in space! `,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(22,937)`
                ],
                [
                    `Very Positive`,
                    `(471,423)`
                ],
                [
                    `Nov 16, 2018`
                ],
                [
                    `Innersloth`
                ],
                [
                    `Innersloth`
                ]
            ]
        },


        tags: [
            [
                `tag_Atmospheric`,
                1748
            ]
            
        ],

        video_urls: [
            "https://www.youtube.com/embed/cuWYK0GGv0o",
            "https://www.youtube.com/embed/eqvI_kqqEhs"
        ],

        elements: [ ],

        end_images: 
        5
    },

    DGBZ: {
        title: 
        "Dragonball Fighter Z",

        price: 
        "$4.99",

        on_sale: false,

        sale_percentage: 0.75,

        description:
        `An online and local party game of teamwork and betrayal 
        for 4-10 players...in space! `,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(22,937)`
                ],
                [
                    `Very Positive`,
                    `(471,423)`
                ],
                [
                    `Nov 16, 2018`
                ],
                [
                    `Innersloth`
                ],
                [
                    `Innersloth`
                ]
            ]
        },


        tags: [
            
            
        ],

        video_urls: [
            "https://www.youtube.com/embed/BnyUyug0li8",
            "https://www.youtube.com/embed/eqvI_kqqEhs"
        ],

        elements: [ ],

        end_images: 
        5
    },

    GTA5: {
        title: 
        "Grand Theft Auto V",

        price: 
        "$4.99",

        on_sale: false,

        sale_percentage: 0.75,

        description:
        `An online and local party game of teamwork and betrayal 
        for 4-10 players...in space! `,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(22,937)`
                ],
                [
                    `Very Positive`,
                    `(471,423)`
                ],
                [
                    `Nov 16, 2018`
                ],
                [
                    `Innersloth`
                ],
                [
                    `Innersloth`
                ]
            ]
        },


        tags: [
            [
                `tag_Atmospheric`,
                1748
            ]
            
        ],

        video_urls: [
            "https://www.youtube.com/embed/hvoD7ehZPcM",
            "https://www.youtube.com/embed/eqvI_kqqEhs"
        ],

        elements: [ ],

        end_images: 
        5
    },

    TabletopSim: {
        title: 
        "Tabletop Simulator",

        price: 
        "$4.99",

        on_sale: false,

        sale_percentage: 0.75,

        description:
        `An online and local party game of teamwork and betrayal 
        for 4-10 players...in space! `,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(22,937)`
                ],
                [
                    `Very Positive`,
                    `(471,423)`
                ],
                [
                    `Nov 16, 2018`
                ],
                [
                    `Innersloth`
                ],
                [
                    `Innersloth`
                ]
            ]
        },


        tags: [
            [
                `tag_Atmospheric`,
                1748
            ]
            
        ],

        video_urls: [
            "https://www.youtube.com/embed/lKZVGZEuCHo",
            "https://www.youtube.com/embed/eqvI_kqqEhs"
        ],

        elements: [ ],

        end_images: 
        5
    },

    AttackonTitan2: {
        title: 
        "Attack on Titan 2",

        price: 
        "$4.99",

        on_sale: false,

        sale_percentage: 0.75,

        description:
        `An online and local party game of teamwork and betrayal 
        for 4-10 players...in space! `,

        table_values: {
            classes: [
                `recent_reviews`,
                `all_reviews`,
                `release_date`,
                `developer`,
                `publisher`,
            ],

            values: [
                [
                    `Very Positive`,
                    `(22,937)`
                ],
                [
                    `Very Positive`,
                    `(471,423)`
                ],
                [
                    `Nov 16, 2018`
                ],
                [
                    `Innersloth`
                ],
                [
                    `Innersloth`
                ]
            ]
        },


        tags: [
            [
                `tag_Atmospheric`,
                1748
            ]
            
        ],

        video_urls: [
            "https://www.youtube.com/embed/6pwC9GP9O1A",
            "https://www.youtube.com/embed/eqvI_kqqEhs"
        ],

        elements: [ ],

        end_images: 
        5
    },
};









