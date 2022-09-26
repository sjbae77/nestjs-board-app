import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
    //front에서 수정하는걸 방지하기 위한 private(접근제한자)사용
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }
}
