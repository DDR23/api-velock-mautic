import { forwardRef, Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { DepositsListener } from './infra/deposits.listener';
import { DEPOSITS_SERVICE_TOKEN } from './utils/depositsServiceToken';
import { DepositsRepository } from './infra/deposits.repository';
import { MauticModule } from '../mautic/mautic.module';
import { PaydDepositsLeadService } from './services/paydDepositsLead.service';
import { PlayersModule } from '../players/players.module';
import { PLAYERS_SERVICE_TOKEN } from '../players/utils/playersServiceToken';
import { PlayersRepository } from '../players/infra/players.repository';
import { CreateDepositsCampaignService } from './services/createDepositsCampaign.service';
import { CreateDepositsLeadService } from './services/createDepositsLead.service';

@Module({
  imports: [
    SocketModule,
    MauticModule,
    forwardRef(() => PlayersModule),
  ],
  providers: [
    DepositsListener,
    CreateDepositsLeadService,
    CreateDepositsCampaignService,
    PaydDepositsLeadService,
    {
      provide: DEPOSITS_SERVICE_TOKEN,
      useClass: DepositsRepository,
    },
    {
      provide: PLAYERS_SERVICE_TOKEN,
      useClass: PlayersRepository,
    },
  ],
})
export class DepositsModule { }
