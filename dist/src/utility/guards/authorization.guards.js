"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizeGuard = void 0;
const common_1 = require("@nestjs/common");
const AuthorizeGuard = (allowedRoles) => {
    class RolesGuardMixin {
        canActivate(context) {
            const request = context.switchToHttp().getRequest();
            const result = request?.currentUser?.roles.map((role) => allowedRoles.includes(role))
                .find((val) => val === true);
            if (result)
                return true;
            throw new common_1.UnauthorizedException('Sorry, you are not authorized.');
        }
    }
    const guard = (0, common_1.mixin)(RolesGuardMixin);
    return guard;
};
exports.AuthorizeGuard = AuthorizeGuard;
//# sourceMappingURL=authorization.guards.js.map