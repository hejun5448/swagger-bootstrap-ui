/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package com.github.xiaoymin.knife4j.datasource.model.config.meta.common;

import com.github.xiaoymin.knife4j.common.lang.ServiceMode;
import com.github.xiaoymin.knife4j.datasource.model.ConfigMeta;
import com.github.xiaoymin.knife4j.datasource.model.config.route.EurekaRoute;
import com.github.xiaoymin.knife4j.datasource.service.ServiceDataProvider;
import com.github.xiaoymin.knife4j.datasource.service.nacos.NacosDefaultMetaServiceProvider;
import lombok.Data;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2022/12/17 11:50
 * @since:knife4j-desktop
 */
@Data
public class ConfigDefaultEurekaMeta extends ConfigMeta<EurekaRoute, NacosDefaultMetaServiceProvider> {
    
    /**
     * Eureka注册中心服务地址,例如：http://192.168.0.223:8888/nacos
     */
    private String serviceUrl;
    
    /**
     * Eureka用户名
     */
    private String username;
    
    /**
     * Eureka密码
     */
    private String password;
    
    @Override
    public Class<NacosDefaultMetaServiceProvider> serviceDataProvider() {
        return NacosDefaultMetaServiceProvider.class;
    }
}