# Technical Assessment Notes

## Challenges I Ran Into

Here are some issues that slowed me down during the setup:

### Environment Configuration
- **API Port Mismatch**: The frontend `.env` was pointing to port `5000`, but the backend actually runs on `5007`. This caused some CORS headaches until I figured it out and fixed the configuration.

### Database Setup
- **PostgreSQL Authentication**: Had some trouble with PostgreSQL authentication, but that was totally on me – just local setup issues that had nothing to do with the project itself.

### Development Tools
- **Debug Configuration**: The VS Code debugger wasn't set up, which made debugging a bit harder. Added a `launch.json` to make life easier.

## Repository Access Issues

### Bitbucket Troubles
- Tried to push my branch and create a PR to main, but ran into permission issues.
- Attempted to fork the repo, but Bitbucket wanted me to create a workspace first and wouldn't let me do it (Bitbucket issue).
- Decided to create a fresh GitHub repo and push everything there instead.

## What's Done and What's Next

### Completed
- ✅ Fixed the notice description field bug

### Pending
- ⏳ **Testing Suite**: Just noticed the testing requirement in Notion. I'll add it on Saturday.

---

*Repository: https://github.com/emigimenezj/solice2021-school-management-system*  
*Branch: `emigimenezj`*
