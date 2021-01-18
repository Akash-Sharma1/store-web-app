package com.expediagroup.graphql.demo.repository

import com.expediagroup.graphql.demo.models.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository: JpaRepository<User, Long>
