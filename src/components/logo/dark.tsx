import Image from "next/image"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export const LogoDark = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
    >
      <Image
        src="/images/icon-dark.svg"
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