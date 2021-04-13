import { Conditions } from '../../Enums/conditions.enum';
import { CodyBodyKind } from './../../Enums/cody-body-kind.enum';
import { Condition } from './condition';
export class CodeBody {

  private kind: CodyBodyKind = CodyBodyKind.Block;
  private condition: Condition;
  private call: string;

  private blockList: CodeBody[] = [];

  constructor() {
    this.clear();
  }

  // Call methods

  public assembleCall(call: string) {
    this.kind = CodyBodyKind.Call;
    this.call = call;
  }

  public dissassembleCall(): string {
    let ret = this.call;
    this.clear();

    return ret;
  }

  // Block methods

  public addToBlock(pos: number, codeBody: CodeBody) {
    this.blockList.splice(pos,0,codeBody);
  }

  public removeFromBlock(pos: number): CodeBody {
    return this.blockList.slice(pos, pos)[0];
  }

  public getKind(): CodyBodyKind {
    return this.kind;
  }

  public clear() {
    this.kind = CodyBodyKind.Block;
    this.condition = new Condition(Conditions.FALSE);
    this.call = "";
    this.blockList = [];
  }

  public toString(): string {
    let ret = "((" + + "))";

    return ret;
  }
}
