"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingsModule = void 0;
const common_1 = require("@nestjs/common");
const ratings_controller_1 = require("./ratings.controller");
const ratings_service_1 = require("./ratings.service");
const mongoose_1 = require("@nestjs/mongoose");
const ratings_schema_1 = require("./schema/ratings-schema");
const auth_module_1 = require("../auth/auth.module");
const helper_module_1 = require("../helper/helper.module");
let RatingsModule = class RatingsModule {
};
exports.RatingsModule = RatingsModule;
exports.RatingsModule = RatingsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                {
                    name: "ratings",
                    schema: ratings_schema_1.ratingSchema
                },
                {
                    name: "ratingsAggregated",
                    schema: ratings_schema_1.ratingAggregatedSchema
                }
            ]),
            auth_module_1.AuthModule,
            helper_module_1.HelperModule,
        ],
        controllers: [ratings_controller_1.RatingsController],
        providers: [ratings_service_1.RatingsService],
        exports: [ratings_service_1.RatingsService],
    })
], RatingsModule);
//# sourceMappingURL=ratings.module.js.map