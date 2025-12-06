# Private Repository Access Management

## Quick Reference

This repository tracks private repository access permissions for the `sensation-software-solutions` organization.

### Access List Files

1. **`PRIVATE-REPOS-ACCESS.md`** - Human-readable documentation
2. **`.github/PRIVATE_REPOSITORY_ACCESS.json`** - Machine-readable configuration

---

## How to Add a New Repository

### Step 1: Grant GitHub Access

1. Navigate to your private repository on GitHub
2. Go to **Settings** → **Integrations**
3. Find and authorize the Cursor AI integration (or relevant service)
4. Select appropriate permissions

### Step 2: Update Documentation

Edit `PRIVATE-REPOS-ACCESS.md`:

```markdown
### N. [Repository Name]
- **Repository**: `sensation-software-solutions/[repo-name]`
- **Type**: Private
- **Access Level**: [Read/Write/Admin]
- **Purpose**: [Brief description]
- **Granted Date**: [YYYY-MM-DD]
- **Status**: ✅ Active
```

### Step 3: Update JSON Configuration

Edit `.github/PRIVATE_REPOSITORY_ACCESS.json`:

```json
{
  "name": "repository-name",
  "fullName": "sensation-software-solutions/repository-name",
  "visibility": "private",
  "accessLevel": "read-write",
  "purpose": "Repository description",
  "grantedDate": "2025-12-06",
  "status": "active",
  "integrations": ["cursor-ai"]
}
```

### Step 4: Commit Changes

```bash
git add PRIVATE-REPOS-ACCESS.md .github/PRIVATE_REPOSITORY_ACCESS.json
git commit -m "Add [repository-name] to private access list"
git push
```

---

## Troubleshooting

### Repository Not Showing in List

**Symptom**: You granted permission to a repository, but it's not appearing in integration lists.

**Common Causes**:
1. **Propagation Delay** (most common)
   - GitHub can take 5-15 minutes to propagate permissions
   - Wait and check again

2. **Insufficient Permissions**
   - Ensure you granted the correct access level
   - Some integrations require "Admin" level

3. **Organization Settings**
   - Check organization-level integration policies
   - Verify third-party access is enabled

4. **Integration Not Authorized**
   - Re-authorize the integration in repository settings
   - Check for expired tokens

**Solutions**:

```bash
# 1. Verify repository visibility
gh repo view sensation-software-solutions/[repo-name] --json visibility

# 2. Check current collaborators and integrations
gh api repos/sensation-software-solutions/[repo-name]/collaborators

# 3. List organization integrations
gh api orgs/sensation-software-solutions/installations
```

### Permission Denied Errors

**Solutions**:
1. Revoke and re-grant access
2. Check access token expiration
3. Verify repository hasn't been archived
4. Confirm you have organization admin rights

---

## Maintenance Schedule

- **Weekly**: Review active integrations
- **Monthly**: Audit access list for unused repositories
- **Quarterly**: Security audit of all permissions

---

## Security Best Practices

✅ **DO**:
- Grant minimum required permissions
- Document the purpose of each access grant
- Remove access when no longer needed
- Keep this list updated

❌ **DON'T**:
- Grant Admin access unless absolutely required
- Leave unused integrations active
- Share access tokens publicly
- Skip documentation updates

---

## Support

### Documentation
- [GitHub Integration Docs](https://docs.github.com/en/apps)
- [Cursor AI Docs](https://cursor.sh/docs)

### Contact
- Organization Admins: Check GitHub organization settings
- Integration Issues: cursor-ai support or relevant service

---

## File Structure

```
/workspace/
├── PRIVATE-REPOS-ACCESS.md          # Human-readable list
├── .github/
│   └── PRIVATE_REPOSITORY_ACCESS.json  # Machine-readable config
└── PRIVATE-REPO-ACCESS-GUIDE.md     # This file
```

---

**Last Updated**: December 6, 2025
**Version**: 1.0.0
