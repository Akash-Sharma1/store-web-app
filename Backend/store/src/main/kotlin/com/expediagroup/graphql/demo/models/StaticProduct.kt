package com.expediagroup.graphql.demo.models

import javax.persistence.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

@Entity
data class StaticProduct(
  @get: NotBlank
  override var name: String,

  @get: NotNull
  override var price: Float,

  @get: NotBlank
  override var description: String
) : Product()
