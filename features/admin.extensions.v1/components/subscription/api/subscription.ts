/**
 * Copyright (c) 2023-2024, WSO2 LLC. (https://www.wso2.com).
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

import { HttpMethods } from "@wso2is/core/models";
import { Config, store } from "../../../../admin.core.v1";
import useRequest, {
    RequestConfigInterface,
    RequestErrorInterface,
    RequestResultInterface
} from "../../../../admin.core.v1/hooks/use-request";
import { OrganizationType } from "../../../../admin.organizations.v1/constants";
import { getDomainQueryParam } from "../../tenants/api/tenants";
import { getTenantResourceEndpoints } from "../../tenants/configs";
import { TenantTierRequestResponse } from "../models/subscription";

/**
 * Hook to get the tier of a tenant.
 *
 * @returns SWR response object containing the data, error, isValidating, mutate.
 */
const useTenantTier = <Data = TenantTierRequestResponse,
    Error = RequestErrorInterface> (): RequestResultInterface<Data, Error> => {

    const organizationType: OrganizationType = store.getState().organization.organizationType;

    const requestConfig: RequestConfigInterface = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: HttpMethods.GET,
        url: getTenantResourceEndpoints().tenantSubscriptionApi + "/tier" + getDomainQueryParam()
    };

    const { data, error, isValidating, mutate } = useRequest<Data, Error>(
        organizationType === OrganizationType.FIRST_LEVEL_ORGANIZATION
        && Config.getDeploymentConfig().extensions?.subscriptionApiPath
            ? requestConfig
            : null,
        {
            shouldRetryOnError: false
        }
    );

    return {
        data,
        error: error,
        isLoading: !error && !data,
        isValidating,
        mutate: mutate
    };
};

export default useTenantTier;
