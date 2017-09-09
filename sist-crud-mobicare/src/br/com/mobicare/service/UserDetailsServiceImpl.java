package br.com.mobicare.service;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import br.com.mobicare.model.User;

@Component("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

	
	
	@PersistenceContext
	private EntityManager entityManager;
	
	
	@Override
	public UserDetails loadUserByUsername(final String username)
			throws UsernameNotFoundException {
		return findByUsername(username);
	}

	private User findByUsername(final String username) {
		try {
			return entityManager
					.createNamedQuery("User.findByUsername", User.class)
					.setParameter("username", username).getSingleResult();

		} catch (NoResultException e) {
			throw new UsernameNotFoundException("Usuario nao encontrado");
		}
	}
	
	
	
}
