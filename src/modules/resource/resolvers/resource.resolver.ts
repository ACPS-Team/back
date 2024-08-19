import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { CreateResourceDto, UpdateResourceDto } from '../interfaces/resource.dto'
import { Resource } from '../models/resource.model'
import { ResourceService } from '../services/resource.service'

@Resolver(() => Resource)
export class ResourceResolver {
  constructor(private readonly resourceService: ResourceService) {}

  @Query(() => [Resource])
  async getAllResources() {
    // TODO check if user is admin
    return this.resourceService.getAllResources()
  }

  @Query(() => [Resource])
  async getMyResources() {
    return this.resourceService.getMyResources('1') // TODO: Get the current user ID
  }

  @Mutation(() => Resource)
  async createResource(@Args('data') data: CreateResourceDto) {
    // TODO check if user is admin
    return this.resourceService.createResource(data)
  }

  @Mutation(() => Resource)
  async updateResource(@Args('id') id: string, @Args('data') data: UpdateResourceDto) {
    // TODO check if user is admin
    return this.resourceService.updateResource(id, data)
  }

  @Mutation(() => Boolean)
  async deleteResource(@Args('id') id: string) {
    // TODO check if user is admin
    return this.resourceService.deleteResource(id)
  }
}
