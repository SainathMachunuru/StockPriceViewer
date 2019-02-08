package com.sample.stock.dbservice.resource;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.stock.dbservice.model.Quote;
import com.sample.stock.dbservice.model.Quotes;
import com.sample.stock.dbservice.repository.QuoteRepositoy;

@RestController
@RequestMapping("rest/db")
public class DbServiceResourse {
	private QuoteRepositoy quoteRepositoy;

	public DbServiceResourse(QuoteRepositoy quoteRepositoy) {
		this.quoteRepositoy = quoteRepositoy;
	}
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@GetMapping("/{username}")
	public List<String> getQuotes(@PathVariable("username") final String username) {

		return getQuotesByUserName(username);
	}

	@PostMapping("/add")
	public List<String> add(@RequestBody final Quotes quotes) {

		quotes.getQuotes().stream().map(quote -> new Quote(quotes.getUserName(), quote))
				.forEach(quote -> quoteRepositoy.save(quote));
		return getQuotesByUserName(quotes.getUserName());
	}

	@PostMapping("/delete/{username}")
	public List<String> delete(@PathVariable("username") final String username) {

		List<Quote> quotes = quoteRepositoy.findByUserName(username);
		quoteRepositoy.deleteAll(quotes);

		return getQuotesByUserName(username);
	}

	private List<String> getQuotesByUserName(@PathVariable("username") String username) {
		return quoteRepositoy.findByUserName(username).stream().map(Quote::getQuote).collect(Collectors.toList());
	}

}
