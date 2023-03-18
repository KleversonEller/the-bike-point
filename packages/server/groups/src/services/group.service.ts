import { group } from "@prisma/client";
import GroupModel from "../model/group.model";

import ValidGroup from "../middleware/valid.group.middleware";

export default class GroupService {
    private readonly _model: GroupModel;

    constructor(model: GroupModel) {
        this._model =  model;
    }

    public async newGroup(data: group): Promise<string> {
        ValidGroup.validNewGroup(data);
        
        const create = await this._model.newGroup(data)

        return create as string
    }
}
