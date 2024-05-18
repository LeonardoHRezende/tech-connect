import Image from "next/image"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export const LogoLight = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
    >
      <Image
        src="/images/icon.svg"
        alt="logo dark"
        width={35}
        height={35}
      />

      <Typography variant="h4">
        tech-connect
      </Typography>
    </Stack>
  )
}