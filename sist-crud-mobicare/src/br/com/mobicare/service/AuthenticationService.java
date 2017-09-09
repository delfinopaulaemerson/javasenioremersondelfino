package br.com.mobicare.service;

import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import br.com.mobicare.model.User;

@Component
public class AuthenticationService{
	
	@Autowired
	@Qualifier("authenticationManager")
	private AuthenticationManager authenticationManager;

	public boolean login(final String username, final String password) {
		try {
			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
					username, password);
			Authentication authenticate = authenticationManager
					.authenticate(token);
			if (authenticate.isAuthenticated()) {
				SecurityContextHolder.getContext().setAuthentication(
						authenticate);
				return true;
			}
		} catch (AuthenticationException e) {
		}
		return false;
	}

	public void logout() {
		SecurityContextHolder.getContext().setAuthentication(null);
		invalidateSession();
	}

	public User getUsuarioLogado() {
		
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		FacesContext.getCurrentInstance().getExternalContext().getSessionMap().put("user", user);
		
		return user;
	}

	private void invalidateSession() {
		FacesContext fc = FacesContext.getCurrentInstance();
		HttpSession session = (HttpSession) fc.getExternalContext()
				.getSession(false);
		session.invalidate();
	}
	

}
