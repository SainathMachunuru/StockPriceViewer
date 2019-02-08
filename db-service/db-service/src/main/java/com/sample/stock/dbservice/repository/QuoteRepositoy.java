package com.sample.stock.dbservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.stock.dbservice.model.Quote;

public interface QuoteRepositoy extends JpaRepository<Quote, Integer> {
	List<Quote> findByUserName(String username);
}
