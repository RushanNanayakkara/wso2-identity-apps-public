/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { aiNS } from "../../../models";

export const ai: aiNS = {
    aiLoginFlow:{
        banner:{
            collapsed:{
                button: "Try Login AI",
                heading: "Configure your login flow with Login AI",
                subheading: "Enter your ideal login sequence; "+
                "our AI adapts authenticators and context to configure the flow."
            },
            full:{
                button: "Try Login AI",
                heading: "Simplify authentication flow Setup with Login AI",
                subheading1: "Configure your application's login flow effortlessly with Login AI, "+
                "by describing your desired authentication sequence, ",
                subheading2: "including authenticators and conditional authentication."
            },
            input:{
                button: "Generate Login Flow",
                heading: "Configure your login flow with Login AI",
                placeholder: "Input your login flow eg: have username and password as first step,"+
                " and prompt for TOTP second factor if the user has ‘manager’ role.",
                subheading: "AI-powered login configurations crafted to align with your application's"+
                " environment and authenticators."
            }
        },
        screens:{
            loading:{
                facts:{
                    0:"Asgardeo features a visual editor that simplifies authentication flow configuration by allowing"+
                    " intuitive placement of authenticators and conditional elements, enhancing design efficiency.",
                    1:"ou can create dynamic authentication sequences with conditional scripts for versatile "+
                    "login flows.",
                    2:"You can use Asgardeo's authentication script editor to create tailored authentication scripts"+
                    " to meet your authentication requirements."
                },
                heading: "Generating your login flow",
                states:{
                    0: "Getting things started...",
                    1: "Getting things started...",
                    10: "Applying final touches...",
                    2: "Getting things started...",
                    3: "Gathering essential data for your login flow...",
                    4: "Gathering essential data for your login flow...",
                    5: "Crafting the login flow script...",
                    6: "Crafting the login flow script...",
                    7: "Assembling authentication steps...",
                    8: "Assembling authentication steps...",
                    9: "Applying final touches..."
                }
            }
        }
    }
};
