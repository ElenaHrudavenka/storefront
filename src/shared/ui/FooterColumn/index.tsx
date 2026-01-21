'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { styled } from 'styled-components';

interface LinkItem {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: Array<LinkItem>;
}

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ListStyled = styled('ul')`
  padding-left: 20px;
`;

const ListItemStyled = styled('li')`
  list-style: none;
`;

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <ListStyled>
        {links.map((link, index) => (
          <ListItemStyled key={index}>
            <LinkStyled href={link.href}>{link.label}</LinkStyled>
          </ListItemStyled>
        ))}
      </ListStyled>
    </Box>
  );
};

export { FooterColumn };
