import { Inject, Injectable } from "@nestjs/common";
import { DEPOSITS_SERVICE_TOKEN } from "../utils/depositsServiceToken";
import { IDepositsRepositories } from "../domain/repositories/IDeposits.repositories";
import { DepositDto } from "../domain/dto/deposit.dto";

@Injectable()
export class CreateDepositsLeadService {
  constructor(
    @Inject(DEPOSITS_SERVICE_TOKEN)
    private readonly depositsRepositories: IDepositsRepositories,
  ) { }

  async execute(data: DepositDto): Promise<any> {
    console.log('🎉 Novo deposito criado:', data);
    const response = await this.depositsRepositories.createDepositsLead(data)
    return response;
  }
}
