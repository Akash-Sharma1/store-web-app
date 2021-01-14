package com.expediagroup.graphql.demo.repository

import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface  StaticProductRepository: JpaRepository<StaticProduct, Long>

@Repository
interface  CustomProductRepository: JpaRepository<CustomProduct, Long>{
  fun findAllByUser(user: User): List<CustomProduct>
}