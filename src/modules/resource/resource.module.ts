import { Module } from '@nestjs/common'

import { ResourceResolver } from './resolvers/resource.resolver'
import { ResourceService } from './services/resource.service'

@Module({
  providers: [ResourceResolver, ResourceService]
})
export class ResourceModule {}
